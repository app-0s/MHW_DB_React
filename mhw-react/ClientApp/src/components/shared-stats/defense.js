"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Defense = /** @class */ (function () {
    // NOTE: May have to use something other than NaN
    function Defense(dataObj) {
        this.base = dataObj && dataObj.base || NaN; // Falsy check (dataobj is null, base isnull)
        this.max = dataObj && dataObj.max || NaN;
        this.augmented = dataObj && dataObj.augmented || NaN;
    }
    return Defense;
}());
exports.default = Defense;
//# sourceMappingURL=defense.js.map