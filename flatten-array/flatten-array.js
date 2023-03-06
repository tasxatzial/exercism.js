//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const flatten = (arr, depth = Infinity) => {
    return _flatten(arr, [], 0);
    
    function _flatten(arr, flattened, currDepth) {
        if (currDepth > depth) {
            flattened.push(arr);
            return;
        }
        for (let el of arr) {
            if (Array.isArray(el)) {
                _flatten(el, flattened, currDepth + 1)
            } else {
                if (el !== null) {
                  flattened.push(el);
                }
            }
        }
        return flattened;
    }
};