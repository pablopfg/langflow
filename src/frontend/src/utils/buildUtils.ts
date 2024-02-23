import { AxiosError } from "axios";
import { BuildStatus } from "../constants/enums";
import { getVerticesOrder, postBuildVertex } from "../controllers/API";
import useFlowStore from "../stores/flowStore";
import { VertexBuildTypeAPI } from "../types/api";

type BuildVerticesParams = {
  flowId: string; // Assuming FlowType is the type for your flow
  nodeId?: string | null; // Assuming nodeId is of type string, and it's optional
  onProgressUpdate?: (progress: number) => void; // Replace number with the actual type if it's not a number
  onBuildUpdate?: (data: any) => void; // Replace any with the actual type of data
  onBuildComplete?: (allNodesValid: boolean) => void;
  onBuildError?: (title, list, idList: string[]) => void;
  onBuildStart?: (idList: string[]) => void;
};

export async function buildVertices({
  flowId,
  nodeId = null,
  onProgressUpdate,
  onBuildUpdate,
  onBuildComplete,
  onBuildError,
  onBuildStart,
}: BuildVerticesParams) {
  let orderResponse = await getVerticesOrder(flowId, nodeId);
  let verticesOrder: Array<Array<string>> = orderResponse.data.ids;
  let vertices_layers: Array<Array<string>> = [];
  let stop = false;

  if (nodeId) {
    for (let i = 0; i < verticesOrder.length; i += 1) {
      const innerArray = verticesOrder[i];
      const idIndex = innerArray.indexOf(nodeId);
      if (idIndex !== -1) {
        // If there's a nodeId, we want to run just that component and not the entire layer
        // because a layer contains dependencies for the next layer
        // and we are stopping at the layer that contains the nodeId
        vertices_layers.push([innerArray[idIndex]]);
        break; // Stop searching after finding the first occurrence
      }
      // If the targetId is not found, include the entire inner array
      vertices_layers.push(innerArray);
    }
  } else {
    vertices_layers = verticesOrder;
  }

  const verticesIds = vertices_layers.flat();
  useFlowStore.getState().updateBuildStatus(verticesIds, BuildStatus.TO_BUILD);
  useFlowStore.getState().updateVerticesBuild(verticesIds);
  useFlowStore.getState().setIsBuilding(true);

  // Set each vertex state to building
  const buildResults: Array<boolean> = [];
  for (const layer of vertices_layers) {
    if (onBuildStart) onBuildStart(layer);
    for (const id of layer) {
      // Check if id is in the list of inactive nodes
      if (useFlowStore.getState().inactiveNodes.includes(id)) {
        // If it is, skip building
        // it should be true because it did
        // what it was supposed to do
        buildResults.push(true);
        continue;
      }
      await buildVertex({
        flowId,
        id,
        onBuildUpdate,
        onBuildError,
        verticesIds,
        buildResults,
        stopBuild: () => {
          stop = true;
        },
      });
      if (stop) {
        break;
      }
    }
    if (stop) {
      break;
    }
  }

  if (onBuildComplete) {
    const allNodesValid = buildResults.every((result) => result);
    onBuildComplete(allNodesValid);
    useFlowStore.getState().setIsBuilding(false);
    useFlowStore.getState().setInactiveNodes([]);
  }
}

async function buildVertex({
  flowId,
  id,
  onBuildUpdate,
  onBuildError,
  verticesIds,
  buildResults,
  stopBuild,
}: {
  flowId: string;
  id: string;
  onBuildUpdate?: (data: any) => void;
  onBuildError?: (title, list, idList: string[]) => void;
  verticesIds: string[];
  buildResults: boolean[];
  stopBuild: () => void;
}) {
  try {
    const buildRes = await postBuildVertex(flowId, id);
    const buildData: VertexBuildTypeAPI = buildRes.data;
    if (onBuildUpdate) {
      let data = {};
      if (!buildData.valid) {
        onBuildError!(
          "Error Building Component",
          [buildData.params],
          verticesIds
        );
        stopBuild();
      }
      data[buildData.id] = buildData;
      onBuildUpdate({ data, id: buildData.id });
    }
    buildResults.push(buildData.valid);
  } catch (error) {
    onBuildError!(
      "Error Building Component",
      [(error as AxiosError<any>).response?.data?.detail ?? "Unknown Error"],
      verticesIds
    );
    stopBuild();
  }
}
