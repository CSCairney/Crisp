
export type dataLayer = {
    layer_id: number;
    layer: string;
    grouptype: string;
    maptype: string;
}

export type dataState = {
    isLoading: boolean;
    error: string;
    dataLayers: dataLayer[];
    tempSelectedLayers: string[];
    selectedLayers: string[];
    };