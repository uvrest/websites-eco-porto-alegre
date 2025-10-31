// packages/utils/lodash.js

// Importa só os módulos instalados
import debounce from "lodash.debounce";
import throttle from "lodash.throttle";
import merge from "lodash.merge";
import cloneDeep from "lodash.clonedeep";
import isEqual from "lodash.isequal";

// Exporta em um único objeto
export const lodash = {
    debounce,
    throttle,
    merge,
    cloneDeep,
    isEqual,
};

// exports individuais (para tree-shaking ficar mais fácil)
export { debounce, throttle, merge, cloneDeep, isEqual };