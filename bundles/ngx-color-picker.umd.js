(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define("ngx-color-picker", ["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ngx-color-picker"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["ngx-color-picker"] = factory(root["@angular/core"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_11__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var formats_1 = __webpack_require__(3);
var ColorPickerService = (function () {
    function ColorPickerService() {
        this.active = null;
    }
    ColorPickerService.prototype.setActive = function (active) {
        if (this.active && this.active !== active && this.active.cpDialogDisplay !== 'inline') {
            this.active.closeColorPicker();
        }
        this.active = active;
    };
    ColorPickerService.prototype.hsla2hsva = function (hsla) {
        var h = Math.min(hsla.h, 1), s = Math.min(hsla.s, 1), l = Math.min(hsla.l, 1), a = Math.min(hsla.a, 1);
        if (l === 0) {
            return new formats_1.Hsva(h, 0, 0, a);
        }
        else {
            var v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
            return new formats_1.Hsva(h, 2 * (v - l) / v, v, a);
        }
    };
    ColorPickerService.prototype.hsva2hsla = function (hsva) {
        var h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
        if (v === 0) {
            return new formats_1.Hsla(h, 0, 0, a);
        }
        else if (s === 0 && v === 1) {
            return new formats_1.Hsla(h, 1, 1, a);
        }
        else {
            var l = v * (2 - s) / 2;
            return new formats_1.Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
        }
    };
    ColorPickerService.prototype.rgbaToHsva = function (rgba) {
        var r = Math.min(rgba.r, 1), g = Math.min(rgba.g, 1), b = Math.min(rgba.b, 1), a = Math.min(rgba.a, 1);
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, v = max;
        var d = max - min;
        s = max === 0 ? 0 : d / max;
        if (max === min) {
            h = 0;
        }
        else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return new formats_1.Hsva(h, s, v, a);
    };
    ColorPickerService.prototype.hsvaToRgba = function (hsva) {
        var h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
        var r, g, b;
        var i = Math.floor(h * 6);
        var f = h * 6 - i;
        var p = v * (1 - s);
        var q = v * (1 - f * s);
        var t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0:
                r = v, g = t, b = p;
                break;
            case 1:
                r = q, g = v, b = p;
                break;
            case 2:
                r = p, g = v, b = t;
                break;
            case 3:
                r = p, g = q, b = v;
                break;
            case 4:
                r = t, g = p, b = v;
                break;
            case 5:
                r = v, g = p, b = q;
                break;
        }
        return new formats_1.Rgba(r, g, b, a);
    };
    ColorPickerService.prototype.stringToHsva = function (colorString, allowHex8) {
        if (colorString === void 0) { colorString = ''; }
        if (allowHex8 === void 0) { allowHex8 = false; }
        var stringParsers = [
            {
                re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (execResult) {
                    return new formats_1.Rgba(parseInt(execResult[2]) / 255, parseInt(execResult[3]) / 255, parseInt(execResult[4]) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                }
            },
            {
                re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (execResult) {
                    return new formats_1.Hsla(parseInt(execResult[2]) / 360, parseInt(execResult[3]) / 100, parseInt(execResult[4]) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                }
            }
        ];
        if (allowHex8) {
            stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
                parse: function (execResult) {
                    return new formats_1.Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || 'FF', 16) / 255);
                }
            });
        }
        else {
            stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                parse: function (execResult) {
                    return new formats_1.Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
                }
            }, {
                re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
                parse: function (execResult) {
                    return new formats_1.Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
                }
            });
        }
        colorString = (colorString || '').toLowerCase();
        var hsva = null;
        for (var key in stringParsers) {
            if (stringParsers.hasOwnProperty(key)) {
                var parser = stringParsers[key];
                var match = parser.re.exec(colorString), color = match && parser.parse(match);
                if (color) {
                    if (color instanceof formats_1.Rgba) {
                        hsva = this.rgbaToHsva(color);
                    }
                    else if (color instanceof formats_1.Hsla) {
                        hsva = this.hsla2hsva(color);
                    }
                    return hsva;
                }
            }
        }
        return hsva;
    };
    ColorPickerService.prototype.outputFormat = function (hsva, outputFormat, alphaChannel) {
        switch (outputFormat) {
            case 'hsla':
                var hsla = this.hsva2hsla(hsva);
                var hslaText = new formats_1.Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                if (hsva.a < 1 || alphaChannel === 'always') {
                    return 'hsla(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%,' + hslaText.a + ')';
                }
                else {
                    return 'hsl(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%)';
                }
            case 'rgba':
                var rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
                if (hsva.a < 1 || alphaChannel === 'always') {
                    return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' + Math.round(rgba.a * 100) / 100 + ')';
                }
                else {
                    return 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
                }
            default:
                return this.hexText(this.denormalizeRGBA(this.hsvaToRgba(hsva)), alphaChannel === 'always' || alphaChannel === 'hex8');
        }
    };
    ColorPickerService.prototype.hexText = function (rgba, allowHex8) {
        var hexText = '#' + ((1 << 24) | (rgba.r << 16) | (rgba.g << 8) | rgba.b).toString(16).substr(1);
        /*if (hexText[1] === hexText[2] && hexText[3] === hexText[4] && hexText[5] === hexText[6] && !allowHex8) {
            hexText = '#' + hexText[1] + hexText[3] + hexText[5];
        }*/
        if (allowHex8) {
            hexText += ((1 << 8) | Math.round(rgba.a * 255)).toString(16).substr(1);
        }
        return hexText;
    };
    ColorPickerService.prototype.denormalizeRGBA = function (rgba) {
        return new formats_1.Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
    };
    ColorPickerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ColorPickerService);
    return ColorPickerService;
}());
exports.ColorPickerService = ColorPickerService;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var color_picker_service_1 = __webpack_require__(1);
var formats_1 = __webpack_require__(3);
var helpers_1 = __webpack_require__(4);
var ColorPickerComponent = (function () {
    function ColorPickerComponent(el, cdr, service) {
        this.el = el;
        this.cdr = cdr;
        this.service = service;
        this.dialogArrowSize = 10;
        this.dialogArrowOffset = 15;
        this.useRootViewContainer = false;
        this.isIE10 = false;
        this.headerName = "Edit Color";
        this.saveBtnTxt = "Save";
        this.cancelBtnTxt = "Cancel";
    }
    ColorPickerComponent.prototype.setDialog = function (instance, elementRef, color, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpOutputFormat, cpPresetLabel, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpPresetColors, cpMaxPresetColorsLength, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpOKButton, cpOKButtonClass, cpOKButtonText, cpAddColorButton, cpAddColorButtonClass, cpAddColorButtonText, cpRemoveColorButtonClass, cpHeight, cpWidth, cpIgnoredElements, cpDialogDisplay, cpSaveClickOutside, cpAlphaChannel, cpUseRootViewContainer, headerName, saveBtnTxt, cancelBtnTxt) {
        this.directiveInstance = instance;
        this.initialColor = color;
        this.directiveElementRef = elementRef;
        this.cpPosition = cpPosition;
        this.cpPositionOffset = parseInt(cpPositionOffset);
        if (!cpPositionRelativeToArrow) {
            this.dialogArrowOffset = 0;
        }
        this.cpOutputFormat = cpOutputFormat;
        this.cpPresetLabel = cpPresetLabel;
        this.cpPresetEmptyMessage = cpPresetEmptyMessage;
        this.cpPresetEmptyMessageClass = cpPresetEmptyMessageClass;
        this.cpPresetColors = cpPresetColors;
        this.cpMaxPresetColorsLength = cpMaxPresetColorsLength;
        this.cpCancelButton = cpCancelButton;
        this.cpCancelButtonClass = cpCancelButtonClass;
        this.cpCancelButtonText = cpCancelButtonText;
        this.cpOKButton = cpOKButton;
        this.cpOKButtonClass = cpOKButtonClass;
        this.cpOKButtonText = cpOKButtonText;
        this.cpAddColorButton = cpAddColorButton;
        this.cpAddColorButtonClass = cpAddColorButtonClass;
        this.cpAddColorButtonText = cpAddColorButtonText;
        this.cpRemoveColorButtonClass = cpRemoveColorButtonClass;
        this.width = this.cpWidth = parseInt(cpWidth);
        this.height = this.cpHeight = parseInt(cpHeight);
        this.cpIgnoredElements = cpIgnoredElements;
        this.cpDialogDisplay = cpDialogDisplay;
        if (this.cpDialogDisplay === 'inline') {
            this.dialogArrowOffset = 0;
            this.dialogArrowSize = 0;
        }
        this.cpSaveClickOutside = cpSaveClickOutside;
        this.cpAlphaChannel = cpAlphaChannel;
        this.useRootViewContainer = cpUseRootViewContainer;
        if (cpOutputFormat === 'hex' && cpAlphaChannel !== 'always' && cpAlphaChannel !== 'hex8') {
            this.cpAlphaChannel = 'disabled';
        }
        this.isIE10 = helpers_1.detectIE() === 10;
        this.headerName = headerName;
        this.saveBtnTxt = saveBtnTxt;
        this.cancelBtnTxt = cancelBtnTxt;
    };
    ColorPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var alphaWidth = this.alphaSlider.nativeElement.offsetWidth;
        var hueWidth = this.hueSlider.nativeElement.offsetWidth;
        this.sliderDimMax = new helpers_1.SliderDimension(hueWidth + 42, this.cpWidth - 32, 130, alphaWidth);
        this.slider = new helpers_1.SliderPosition(0, 0, 0, 0);
        if (this.cpOutputFormat === 'rgba') {
            this.format = 1;
        }
        else if (this.cpOutputFormat === 'hsla') {
            this.format = 2;
        }
        else {
            this.format = 0;
        }
        this.listenerMouseDown = function (event) { _this.onMouseDown(event); };
        this.listenerResize = function () { _this.onResize(); };
        this.openDialog(this.initialColor, false);
    };
    ColorPickerComponent.prototype.ngAfterViewInit = function () {
        if (this.cpWidth != 272) {
            var alphaWidth = this.alphaSlider.nativeElement.offsetWidth;
            var hueWidth = this.hueSlider.nativeElement.offsetWidth;
            this.sliderDimMax = new helpers_1.SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
            this.update(false);
            this.cdr.detectChanges();
        }
    };
    ColorPickerComponent.prototype.setInitialColor = function (color) {
        this.initialColor = color;
    };
    ColorPickerComponent.prototype.setPresetConfig = function (cpPresetLabel, cpPresetColors) {
        this.cpPresetLabel = cpPresetLabel;
        this.cpPresetColors = cpPresetColors;
    };
    ColorPickerComponent.prototype.openDialog = function (color, emit) {
        if (emit === void 0) { emit = true; }
        this.service.setActive(this);
        if (!this.width) {
            this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth;
        }
        this.setInitialColor(color);
        this.setColorFromString(color, emit);
        this.openColorPicker();
    };
    ColorPickerComponent.prototype.cancelColor = function (event) {
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
        this.setColorFromString(this.initialColor, true);
        if (this.cpDialogDisplay === 'popup') {
            this.directiveInstance.colorChanged(this.initialColor, true);
            this.closeColorPicker();
        }
        this.directiveInstance.colorCanceled();
    };
    ColorPickerComponent.prototype.oKColor = function (event) {
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
        if (this.cpDialogDisplay === 'popup') {
            this.closeColorPicker();
        }
        if (this.outputColor) {
            this.directiveInstance.colorSelected(this.outputColor);
        }
    };
    ColorPickerComponent.prototype.setColorFromString = function (value, emit, update) {
        if (emit === void 0) { emit = true; }
        if (update === void 0) { update = true; }
        var hsva;
        if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'hex8') {
            hsva = this.service.stringToHsva(value, true);
            if (!hsva && !this.hsva) {
                hsva = this.service.stringToHsva(value, false);
            }
        }
        else {
            hsva = this.service.stringToHsva(value, false);
        }
        if (hsva) {
            this.hsva = hsva;
            this.update(emit, update);
        }
    };
    ColorPickerComponent.prototype.addPresetColor = function (event, value) {
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
        if (!this.cpPresetColors.filter(function (color) { return color === value; }).length) {
            this.cpPresetColors = this.cpPresetColors.concat(value);
            this.directiveInstance.presetColorsChanged(this.cpPresetColors);
        }
    };
    ColorPickerComponent.prototype.removePresetColor = function (event, value) {
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
        this.cpPresetColors = this.cpPresetColors.filter(function (color) { return color !== value; });
        this.directiveInstance.presetColorsChanged(this.cpPresetColors);
    };
    ColorPickerComponent.prototype.onDragEnd = function (slider) {
        this.directiveInstance.sliderDragEnd({ slider: slider, color: this.outputColor });
    };
    ColorPickerComponent.prototype.onDragStart = function (slider) {
        this.directiveInstance.sliderDragStart({ slider: slider, color: this.outputColor });
    };
    ColorPickerComponent.prototype.onMouseDown = function (event) {
        // Workaround for IE10: We need to manually click on OK/Cancel button to close the color-picker [detectIE() !== 10]
        if ((!this.isDescendant(this.el.nativeElement, event.target)
            && event.target != this.directiveElementRef.nativeElement &&
            this.cpIgnoredElements.filter(function (item) { return item === event.target; }).length === 0) &&
            this.cpDialogDisplay === 'popup' && !this.isIE10) {
            if (!this.cpSaveClickOutside) {
                this.setColorFromString(this.initialColor, false);
                this.directiveInstance.colorChanged(this.initialColor);
            }
            this.closeColorPicker();
        }
    };
    ColorPickerComponent.prototype.openColorPicker = function () {
        var _this = this;
        if (!this.show) {
            this.show = true;
            this.hidden = true;
            setTimeout(function () {
                _this.setDialogPosition();
                _this.hidden = false;
                _this.cdr.detectChanges();
            }, 0);
            this.directiveInstance.toggle(true);
            /**
             * Required for IE10
             * This event listener is conditional to avoid memory leaks
             * If the directive was applied at the root level then this won't affect anything
             * but if we implement this color picker in child components then it closes on clicking anywhere (including this component)
             * and stopPropagation() does not work
             */
            if (!this.isIE10) {
                document.addEventListener('mousedown', this.listenerMouseDown);
            }
            window.addEventListener('resize', this.listenerResize);
        }
    };
    ColorPickerComponent.prototype.closeColorPicker = function () {
        if (this.show) {
            this.show = false;
            this.directiveInstance.toggle(false);
            /**
             * Required for IE10
             * If this is not attached then no need to remove the listener
             */
            if (!this.isIE10) {
                document.removeEventListener('mousedown', this.listenerMouseDown);
            }
            window.removeEventListener('resize', this.listenerResize);
            if (!this.cdr['destroyed']) {
                this.cdr.detectChanges();
            }
        }
    };
    ColorPickerComponent.prototype.onResize = function () {
        if (this.position === 'fixed') {
            this.setDialogPosition();
        }
        else if (this.cpDialogDisplay !== 'inline') {
            this.closeColorPicker();
        }
    };
    ColorPickerComponent.prototype.setDialogPosition = function () {
        if (this.cpDialogDisplay === 'inline') {
            this.position = 'relative';
            return;
        }
        var dialogHeight = this.dialogElement.nativeElement.offsetHeight;
        var node = this.directiveElementRef.nativeElement.parentNode, position = 'static', transform = '';
        var parentNode = null, transformNode = null, style = null;
        while (node !== null && node.tagName !== 'HTML') {
            style = window.getComputedStyle(node);
            position = style.getPropertyValue("position");
            transform = style.getPropertyValue("transform");
            if (position !== 'static' && parentNode === null) {
                parentNode = node;
            }
            if (transform && transform !== 'none' && transformNode === null) {
                transformNode = node;
            }
            if (position === 'fixed') {
                parentNode = transformNode;
                break;
            }
            node = node.parentNode;
        }
        var boxDirective = this.createBox(this.directiveElementRef.nativeElement, (position !== 'fixed'));
        if ((position !== 'fixed' || parentNode) && !this.useRootViewContainer) {
            if (parentNode === null) {
                parentNode = node;
            }
            var boxParent = this.createBox(parentNode, (position !== 'fixed'));
            this.top = boxDirective.top - boxParent.top;
            this.left = boxDirective.left - boxParent.left;
        }
        else {
            this.top = boxDirective.top;
            this.left = boxDirective.left;
        }
        if (position === 'fixed') {
            this.position = 'fixed';
        }
        if (this.cpPosition === 'left') {
            this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
            this.left -= this.cpWidth + this.dialogArrowSize - 2;
        }
        else if (this.cpPosition === 'top') {
            this.top -= dialogHeight + this.dialogArrowSize;
            this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
            this.arrowTop = dialogHeight - 1;
        }
        else if (this.cpPosition === 'bottom') {
            this.top += boxDirective.height + this.dialogArrowSize;
            this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
        }
        else {
            this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
            this.left += boxDirective.width + this.dialogArrowSize - 2;
        }
    };
    ColorPickerComponent.prototype.setSaturation = function (val) {
        var hsla = this.service.hsva2hsla(this.hsva);
        hsla.s = val.v / val.rg;
        this.hsva = this.service.hsla2hsva(hsla);
        this.update();
        this.directiveInstance.inputChanged({ input: 'saturation', value: hsla.s, color: this.outputColor });
    };
    ColorPickerComponent.prototype.setLightness = function (val) {
        var hsla = this.service.hsva2hsla(this.hsva);
        hsla.l = val.v / val.rg;
        this.hsva = this.service.hsla2hsva(hsla);
        this.update();
        this.directiveInstance.inputChanged({ input: 'lightness', value: hsla.l, color: this.outputColor });
    };
    ColorPickerComponent.prototype.setHue = function (val) {
        this.hsva.h = val.v / val.rg;
        this.update();
        this.directiveInstance.sliderChanged({ slider: 'hue', value: this.hsva.h, color: this.outputColor });
    };
    ColorPickerComponent.prototype.setAlpha = function (val) {
        this.hsva.a = val.v / val.rg;
        this.update();
        this.directiveInstance.sliderChanged({ slider: 'alpha', value: this.hsva.a, color: this.outputColor });
    };
    ColorPickerComponent.prototype.setR = function (val) {
        var rgba = this.service.hsvaToRgba(this.hsva);
        rgba.r = val.v / val.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.update();
        this.directiveInstance.inputChanged({ input: 'red', value: rgba.r, color: this.outputColor });
    };
    ColorPickerComponent.prototype.setG = function (val) {
        var rgba = this.service.hsvaToRgba(this.hsva);
        rgba.g = val.v / val.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.update();
        this.directiveInstance.inputChanged({ input: 'green', value: rgba.g, color: this.outputColor });
    };
    ColorPickerComponent.prototype.setB = function (val) {
        var rgba = this.service.hsvaToRgba(this.hsva);
        rgba.b = val.v / val.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.update();
        this.directiveInstance.inputChanged({ input: 'blue', value: rgba.b, color: this.outputColor });
    };
    ColorPickerComponent.prototype.setA = function (val) {
        this.hsva.a = val.v / val.rg;
        this.update();
        this.directiveInstance.inputChanged({ input: 'alpha', value: this.hsva.a, color: this.outputColor });
    };
    ColorPickerComponent.prototype.setHex = function (val) {
        if (val === null) {
            this.update();
        }
        else {
            this.setColorFromString(val, true, false);
            this.directiveInstance.inputChanged({ input: 'hex', value: val, color: this.outputColor });
        }
    };
    ColorPickerComponent.prototype.setSaturationAndBrightness = function (val) {
        this.hsva.s = val.s / val.rgX;
        this.hsva.v = val.v / val.rgY;
        this.update();
        this.directiveInstance.sliderChanged({ slider: 'lightness', value: this.hsva.v, color: this.outputColor });
        this.directiveInstance.sliderChanged({ slider: 'saturation', value: this.hsva.s, color: this.outputColor });
    };
    ColorPickerComponent.prototype.formatPolicy = function () {
        this.format = (this.format + 1) % 3;
        return this.format;
    };
    ColorPickerComponent.prototype.update = function (emit, update) {
        if (emit === void 0) { emit = true; }
        if (update === void 0) { update = true; }
        if (this.sliderDimMax) {
            var hsla = this.service.hsva2hsla(this.hsva);
            var rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
            var hueRgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(new formats_1.Hsva(this.hsva.h, 1, 1, 1)));
            if (update) {
                this.hslaText = new formats_1.Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                this.rgbaText = new formats_1.Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
                this.hexText = this.service.hexText(rgba, this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'hex8');
            }
            this.alphaSliderColor = 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
            this.hueSliderColor = 'rgb(' + hueRgba.r + ',' + hueRgba.g + ',' + hueRgba.b + ')';
            var lastOutput = this.outputColor;
            this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
            this.selectedColor = this.service.outputFormat(this.hsva, 'rgba', null);
            this.slider = new helpers_1.SliderPosition((this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);
            if (emit && lastOutput !== this.outputColor) {
                this.directiveInstance.colorChanged(this.outputColor);
            }
        }
    };
    ColorPickerComponent.prototype.isDescendant = function (parent, child) {
        var node = child.parentNode;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    ColorPickerComponent.prototype.createBox = function (element, offset) {
        return {
            top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
            left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    };
    __decorate([
        core_1.ViewChild('hueSlider'),
        __metadata("design:type", Object)
    ], ColorPickerComponent.prototype, "hueSlider", void 0);
    __decorate([
        core_1.ViewChild('alphaSlider'),
        __metadata("design:type", Object)
    ], ColorPickerComponent.prototype, "alphaSlider", void 0);
    __decorate([
        core_1.ViewChild('dialogPopup'),
        __metadata("design:type", Object)
    ], ColorPickerComponent.prototype, "dialogElement", void 0);
    ColorPickerComponent = __decorate([
        core_1.Component({
            selector: 'color-picker',
            template: __webpack_require__(8),
            styles: [__webpack_require__(7)]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.ChangeDetectorRef, color_picker_service_1.ColorPickerService])
    ], ColorPickerComponent);
    return ColorPickerComponent;
}());
exports.ColorPickerComponent = ColorPickerComponent;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Hsva = (function () {
    function Hsva(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return Hsva;
}());
exports.Hsva = Hsva;
var Hsla = (function () {
    function Hsla(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }
    return Hsla;
}());
exports.Hsla = Hsla;
var Rgba = (function () {
    function Rgba(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    return Rgba;
}());
exports.Rgba = Rgba;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var TextDirective = (function () {
    function TextDirective() {
        this.newValue = new core_1.EventEmitter();
    }
    TextDirective.prototype.changeInput = function (value) {
        if (this.rg === undefined) {
            this.newValue.emit(value);
        }
        else {
            var numeric = parseFloat(value);
            if (!isNaN(numeric) && numeric >= 0 && numeric <= this.rg) {
                this.newValue.emit({ v: numeric, rg: this.rg });
            }
        }
    };
    __decorate([
        core_1.Output('newValue'),
        __metadata("design:type", Object)
    ], TextDirective.prototype, "newValue", void 0);
    __decorate([
        core_1.Input('text'),
        __metadata("design:type", Object)
    ], TextDirective.prototype, "text", void 0);
    __decorate([
        core_1.Input('rg'),
        __metadata("design:type", Number)
    ], TextDirective.prototype, "rg", void 0);
    TextDirective = __decorate([
        core_1.Directive({
            selector: '[text]',
            host: {
                '(input)': 'changeInput($event.target.value)'
            }
        })
    ], TextDirective);
    return TextDirective;
}());
exports.TextDirective = TextDirective;
var SliderDirective = (function () {
    function SliderDirective(el) {
        var _this = this;
        this.el = el;
        this.newValue = new core_1.EventEmitter();
        this.dragStart = new core_1.EventEmitter();
        this.dragEnd = new core_1.EventEmitter();
        this.listenerMove = function (event) { _this.move(event); };
        this.listenerStop = function () { _this.stop(); };
    }
    SliderDirective.prototype.setCursor = function (event) {
        var height = this.el.nativeElement.offsetHeight;
        var width = this.el.nativeElement.offsetWidth;
        var x = Math.max(0, Math.min(this.getX(event), width));
        var y = Math.max(0, Math.min(this.getY(event), height));
        if (this.rgX !== undefined && this.rgY !== undefined) {
            this.newValue.emit({ s: x / width, v: (1 - y / height), rgX: this.rgX, rgY: this.rgY });
        }
        else if (this.rgX === undefined && this.rgY !== undefined) {
            this.newValue.emit({ v: y / height, rg: this.rgY });
        }
        else {
            this.newValue.emit({ v: x / width, rg: this.rgX });
        }
    };
    SliderDirective.prototype.move = function (event) {
        event.preventDefault();
        this.setCursor(event);
    };
    SliderDirective.prototype.start = function (event) {
        this.setCursor(event);
        document.addEventListener('mousemove', this.listenerMove);
        document.addEventListener('touchmove', this.listenerMove);
        document.addEventListener('mouseup', this.listenerStop);
        document.addEventListener('touchend', this.listenerStop);
        this.dragStart.emit();
    };
    SliderDirective.prototype.stop = function () {
        document.removeEventListener('mousemove', this.listenerMove);
        document.removeEventListener('touchmove', this.listenerMove);
        document.removeEventListener('mouseup', this.listenerStop);
        document.removeEventListener('touchend', this.listenerStop);
        this.dragEnd.emit();
    };
    SliderDirective.prototype.getX = function (event) {
        return (event.pageX !== undefined ? event.pageX : event.touches[0].pageX) - this.el.nativeElement.getBoundingClientRect().left - window.pageXOffset;
    };
    SliderDirective.prototype.getY = function (event) {
        return (event.pageY !== undefined ? event.pageY : event.touches[0].pageY) - this.el.nativeElement.getBoundingClientRect().top - window.pageYOffset;
    };
    __decorate([
        core_1.Output('newValue'),
        __metadata("design:type", Object)
    ], SliderDirective.prototype, "newValue", void 0);
    __decorate([
        core_1.Output('dragStart'),
        __metadata("design:type", Object)
    ], SliderDirective.prototype, "dragStart", void 0);
    __decorate([
        core_1.Output('dragEnd'),
        __metadata("design:type", Object)
    ], SliderDirective.prototype, "dragEnd", void 0);
    __decorate([
        core_1.Input('slider'),
        __metadata("design:type", String)
    ], SliderDirective.prototype, "slider", void 0);
    __decorate([
        core_1.Input('rgX'),
        __metadata("design:type", Number)
    ], SliderDirective.prototype, "rgX", void 0);
    __decorate([
        core_1.Input('rgY'),
        __metadata("design:type", Number)
    ], SliderDirective.prototype, "rgY", void 0);
    SliderDirective = __decorate([
        core_1.Directive({
            selector: '[slider]',
            host: {
                '(mousedown)': 'start($event)',
                '(touchstart)': 'start($event)'
            }
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], SliderDirective);
    return SliderDirective;
}());
exports.SliderDirective = SliderDirective;
var SliderPosition = (function () {
    function SliderPosition(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderPosition;
}());
exports.SliderPosition = SliderPosition;
var SliderDimension = (function () {
    function SliderDimension(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderDimension;
}());
exports.SliderDimension = SliderDimension;
function detectIE() {
    var ua = '';
    if (typeof navigator !== "undefined") {
        ua = navigator.userAgent.toLowerCase();
    }
    var msie = ua.indexOf('msie ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    // other browser
    return false;
}
exports.detectIE = detectIE;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var color_picker_service_1 = __webpack_require__(1);
var color_picker_component_1 = __webpack_require__(2);
var ColorPickerDirective = (function () {
    function ColorPickerDirective(injector, cfr, appRef, vcRef, elRef, service) {
        this.injector = injector;
        this.cfr = cfr;
        this.appRef = appRef;
        this.vcRef = vcRef;
        this.elRef = elRef;
        this.service = service;
        this.cpPosition = 'right';
        this.cpPositionOffset = '0%';
        this.cpPositionRelativeToArrow = false;
        this.cpOutputFormat = 'hex';
        this.cpPresetLabel = 'Preset colors';
        this.cpPresetEmptyMessage = 'No colors added';
        this.cpPresetEmptyMessageClass = 'preset-empty-message';
        this.cpMaxPresetColorsLength = 6;
        this.cpCancelButton = false;
        this.cpCancelButtonClass = 'cp-cancel-button-class';
        this.cpCancelButtonText = 'Cancel';
        this.cpOKButton = false;
        this.cpOKButtonClass = 'cp-ok-button-class';
        this.cpOKButtonText = 'OK';
        this.cpAddColorButton = false;
        this.cpAddColorButtonClass = 'cp-add-color-button-class';
        this.cpAddColorButtonText = 'Add color';
        this.cpRemoveColorButtonClass = 'cp-remove-color-button-class';
        this.cpFallbackColor = '#fff';
        this.cpHeight = 'auto';
        this.cpWidth = '272px';
        this.cpIgnoredElements = [];
        this.cpDialogDisplay = 'popup';
        this.cpSaveClickOutside = true;
        this.cpAlphaChannel = 'enabled';
        this.cpUseRootViewContainer = false;
        this.headerName = 'Edit Color';
        this.saveBtnTxt = 'Save';
        this.cancelBtnTxt = 'Cancel';
        this.cpInputChange = new core_1.EventEmitter(true);
        this.cpToggleChange = new core_1.EventEmitter(true);
        this.cpSliderChange = new core_1.EventEmitter(true);
        this.cpSliderDragEnd = new core_1.EventEmitter(true);
        this.cpSliderDragStart = new core_1.EventEmitter(true);
        this.colorPickerCancel = new core_1.EventEmitter(true);
        this.colorPickerSelect = new core_1.EventEmitter(true);
        this.colorPickerChange = new core_1.EventEmitter(false);
        this.presetColorsChange = new core_1.EventEmitter(true);
        this.ignoreChanges = false;
        this.created = false;
    }
    ColorPickerDirective.prototype.ngOnChanges = function (changes) {
        if (changes.cpToggle) {
            if (changes.cpToggle.currentValue)
                this.openDialog();
            if (!changes.cpToggle.currentValue && this.dialog)
                this.dialog.closeColorPicker();
        }
        if (changes.colorPicker) {
            if (this.dialog && !this.ignoreChanges) {
                if (this.cpDialogDisplay === 'inline') {
                    this.dialog.setInitialColor(changes.colorPicker.currentValue);
                }
                this.dialog.setColorFromString(changes.colorPicker.currentValue, false);
            }
            this.ignoreChanges = false;
        }
        if (changes.cpPresetLabel || changes.cpPresetColors) {
            if (this.dialog) {
                this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
            }
        }
    };
    ColorPickerDirective.prototype.ngOnInit = function () {
        this.colorPicker = this.colorPicker || this.cpFallbackColor || 'rgba(0, 0, 0, 1)';
        /*let hsva = this.service.stringToHsva(this.colorPicker);
        if (hsva === null) hsva = this.service.stringToHsva(this.colorPicker, true);
        if (hsva == null) {
            hsva = this.service.stringToHsva(this.cpFallbackColor);
        }
        let color = this.service.outputFormat(hsva, this.cpOutputFormat, this.cpAlphaChannel);
        if (color !== this.colorPicker) {
            //setTimeout(() => {
              this.colorPickerChange.emit(color);
              this.cdr.detectChanges();
            //}, 0);
        }*/
    };
    ColorPickerDirective.prototype.ngOnDestroy = function () {
        if (this.cmpRef !== undefined) {
            this.cmpRef.destroy();
        }
    };
    ColorPickerDirective.prototype.openDialog = function () {
        this.colorPicker = this.colorPicker || this.cpFallbackColor || 'rgba(0, 0, 0, 1)';
        if (!this.created) {
            this.created = true;
            var vcRef = this.vcRef;
            if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
                var classOfRootComponent = this.appRef.componentTypes[0];
                var appInstance = this.injector.get(classOfRootComponent);
                vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;
                if (vcRef === this.vcRef) {
                    console.warn('You are using cpUseRootViewContainer, but the root component is not exposing viewContainerRef!' +
                        'Please expose it by adding \'public vcRef: ViewContainerRef\' to the constructor.');
                }
            }
            var compFactory = this.cfr.resolveComponentFactory(color_picker_component_1.ColorPickerComponent);
            var injector = core_1.ReflectiveInjector.fromResolvedProviders([], vcRef.parentInjector);
            this.cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
            this.cmpRef.instance.setDialog(this, this.elRef, this.colorPicker, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpOutputFormat, this.cpPresetLabel, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpPresetColors, this.cpMaxPresetColorsLength, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText, this.cpRemoveColorButtonClass, this.cpHeight, this.cpWidth, this.cpIgnoredElements, this.cpDialogDisplay, this.cpSaveClickOutside, this.cpAlphaChannel, this.cpUseRootViewContainer, this.headerName, this.saveBtnTxt, this.cancelBtnTxt);
            this.dialog = this.cmpRef.instance;
            if (this.vcRef !== vcRef) {
                this.cmpRef.changeDetectorRef.detectChanges();
            }
        }
        else if (this.dialog) {
            this.dialog.openDialog(this.colorPicker);
        }
    };
    ColorPickerDirective.prototype.toggle = function (value) {
        this.cpToggleChange.emit(value);
    };
    ColorPickerDirective.prototype.colorChanged = function (value, ignore) {
        if (ignore === void 0) { ignore = true; }
        this.ignoreChanges = ignore;
        this.colorPickerChange.emit(value);
    };
    ColorPickerDirective.prototype.colorCanceled = function () {
        this.colorPickerCancel.emit();
    };
    ColorPickerDirective.prototype.colorSelected = function (value) {
        this.colorPickerSelect.emit(value);
    };
    ColorPickerDirective.prototype.presetColorsChanged = function (value) {
        this.presetColorsChange.emit(value);
    };
    ColorPickerDirective.prototype.inputFocus = function () {
        var _this = this;
        if (this.cpIgnoredElements.filter(function (item) { return item === _this.elRef.nativeElement; }).length === 0) {
            this.openDialog();
        }
    };
    ColorPickerDirective.prototype.inputChange = function (value) {
        if (this.dialog) {
            this.dialog.setColorFromString(value, true);
        }
        else {
            this.colorPicker = value || this.cpFallbackColor || 'rgba(0, 0, 0, 1)';
            this.colorPickerChange.emit(this.colorPicker);
        }
    };
    ColorPickerDirective.prototype.inputChanged = function (event) {
        this.cpInputChange.emit(event);
    };
    ColorPickerDirective.prototype.sliderChanged = function (event) {
        this.cpSliderChange.emit(event);
    };
    ColorPickerDirective.prototype.sliderDragEnd = function (event) {
        this.cpSliderDragEnd.emit(event);
    };
    ColorPickerDirective.prototype.sliderDragStart = function (event) {
        this.cpSliderDragStart.emit(event);
    };
    __decorate([
        core_1.Input('colorPicker'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "colorPicker", void 0);
    __decorate([
        core_1.Input('cpToggle'),
        __metadata("design:type", Boolean)
    ], ColorPickerDirective.prototype, "cpToggle", void 0);
    __decorate([
        core_1.Input('cpPosition'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpPosition", void 0);
    __decorate([
        core_1.Input('cpPositionOffset'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpPositionOffset", void 0);
    __decorate([
        core_1.Input('cpPositionRelativeToArrow'),
        __metadata("design:type", Boolean)
    ], ColorPickerDirective.prototype, "cpPositionRelativeToArrow", void 0);
    __decorate([
        core_1.Input('cpOutputFormat'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpOutputFormat", void 0);
    __decorate([
        core_1.Input('cpPresetLabel'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpPresetLabel", void 0);
    __decorate([
        core_1.Input('cpPresetEmptyMessage'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpPresetEmptyMessage", void 0);
    __decorate([
        core_1.Input('cpPresetEmptyMessageClass'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpPresetEmptyMessageClass", void 0);
    __decorate([
        core_1.Input('cpPresetColors'),
        __metadata("design:type", Array)
    ], ColorPickerDirective.prototype, "cpPresetColors", void 0);
    __decorate([
        core_1.Input('cpMaxPresetColorsLength'),
        __metadata("design:type", Number)
    ], ColorPickerDirective.prototype, "cpMaxPresetColorsLength", void 0);
    __decorate([
        core_1.Input('cpCancelButton'),
        __metadata("design:type", Boolean)
    ], ColorPickerDirective.prototype, "cpCancelButton", void 0);
    __decorate([
        core_1.Input('cpCancelButtonClass'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpCancelButtonClass", void 0);
    __decorate([
        core_1.Input('cpCancelButtonText'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpCancelButtonText", void 0);
    __decorate([
        core_1.Input('cpOKButton'),
        __metadata("design:type", Boolean)
    ], ColorPickerDirective.prototype, "cpOKButton", void 0);
    __decorate([
        core_1.Input('cpOKButtonClass'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpOKButtonClass", void 0);
    __decorate([
        core_1.Input('cpOKButtonText'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpOKButtonText", void 0);
    __decorate([
        core_1.Input('cpAddColorButton'),
        __metadata("design:type", Boolean)
    ], ColorPickerDirective.prototype, "cpAddColorButton", void 0);
    __decorate([
        core_1.Input('cpAddColorButtonClass'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpAddColorButtonClass", void 0);
    __decorate([
        core_1.Input('cpAddColorButtonText'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpAddColorButtonText", void 0);
    __decorate([
        core_1.Input('cpRemoveColorButtonClass'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpRemoveColorButtonClass", void 0);
    __decorate([
        core_1.Input('cpFallbackColor'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpFallbackColor", void 0);
    __decorate([
        core_1.Input('cpHeight'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpHeight", void 0);
    __decorate([
        core_1.Input('cpWidth'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpWidth", void 0);
    __decorate([
        core_1.Input('cpIgnoredElements'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "cpIgnoredElements", void 0);
    __decorate([
        core_1.Input('cpDialogDisplay'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpDialogDisplay", void 0);
    __decorate([
        core_1.Input('cpSaveClickOutside'),
        __metadata("design:type", Boolean)
    ], ColorPickerDirective.prototype, "cpSaveClickOutside", void 0);
    __decorate([
        core_1.Input('cpAlphaChannel'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cpAlphaChannel", void 0);
    __decorate([
        core_1.Input('cpUseRootViewContainer'),
        __metadata("design:type", Boolean)
    ], ColorPickerDirective.prototype, "cpUseRootViewContainer", void 0);
    __decorate([
        core_1.Input('headerName'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "headerName", void 0);
    __decorate([
        core_1.Input('saveBtnTxt'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "saveBtnTxt", void 0);
    __decorate([
        core_1.Input('cancelBtnTxt'),
        __metadata("design:type", String)
    ], ColorPickerDirective.prototype, "cancelBtnTxt", void 0);
    __decorate([
        core_1.Output('cpInputChange'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "cpInputChange", void 0);
    __decorate([
        core_1.Output('cpToggleChange'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "cpToggleChange", void 0);
    __decorate([
        core_1.Output('cpSliderChange'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "cpSliderChange", void 0);
    __decorate([
        core_1.Output('cpSliderDragEnd'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "cpSliderDragEnd", void 0);
    __decorate([
        core_1.Output('cpSliderDragStart'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "cpSliderDragStart", void 0);
    __decorate([
        core_1.Output('colorPickerCancel'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "colorPickerCancel", void 0);
    __decorate([
        core_1.Output('colorPickerSelect'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "colorPickerSelect", void 0);
    __decorate([
        core_1.Output('colorPickerChange'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "colorPickerChange", void 0);
    __decorate([
        core_1.Output('cpPresetColorsChange'),
        __metadata("design:type", Object)
    ], ColorPickerDirective.prototype, "presetColorsChange", void 0);
    ColorPickerDirective = __decorate([
        core_1.Directive({
            selector: '[colorPicker]',
            host: {
                '(click)': 'inputFocus()',
                '(focus)': 'inputFocus()',
                '(input)': 'inputChange($event.target.value)'
            }
        }),
        __metadata("design:paramtypes", [core_1.Injector, core_1.ComponentFactoryResolver,
            core_1.ApplicationRef, core_1.ViewContainerRef, core_1.ElementRef,
            color_picker_service_1.ColorPickerService])
    ], ColorPickerDirective);
    return ColorPickerDirective;
}());
exports.ColorPickerDirective = ColorPickerDirective;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(2));
__export(__webpack_require__(5));
__export(__webpack_require__(10));
__export(__webpack_require__(1));
__export(__webpack_require__(3));
__export(__webpack_require__(4));


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "/*\n * Styles for Color Picker\n *\n * Alberto Pujante\n *\n * @licence: http://opensource.org/licenses/MIT\n */\n.color-picker * {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.color-picker-position {\n  position: absolute;\n  top: 100px;\n  right: 435px; }\n\n.color-picker {\n  cursor: default;\n  width: 230px;\n  height: auto;\n  position: absolute;\n  z-index: 100000;\n  border: 1px solid #d9d9d9;\n  background-color: #fff;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .color-picker i {\n    cursor: pointer;\n    position: relative; }\n  .color-picker input {\n    text-align: center;\n    font-size: 13px;\n    height: 26px;\n    -moz-appearance: textfield; }\n    .color-picker input:invalid {\n      box-shadow: none; }\n    .color-picker input:-moz-submit-invalid {\n      box-shadow: none; }\n    .color-picker input:-moz-ui-invalid {\n      box-shadow: none; }\n    .color-picker input::-webkit-inner-spin-button, .color-picker input::-webkit-outer-spin-button {\n      -webkit-appearance: none;\n      margin: 0; }\n  .color-picker .button-area {\n    padding: 0 16px 16px 16px;\n    text-align: right; }\n  .color-picker .preset-area {\n    padding: 4px 15px; }\n    .color-picker .preset-area .preset-label {\n      width: 100%;\n      padding: 4px;\n      font-size: 11px;\n      text-align: left;\n      color: #555; }\n    .color-picker .preset-area .preset-color {\n      -moz-border-radius: 25%;\n      -webkit-border-radius: 25%;\n      border-radius: 25%;\n      -khtml-border-radius: 25%;\n      border: #a9a9a9 solid 1px;\n      cursor: pointer;\n      display: inline-block;\n      height: 18px;\n      margin: 4px 6px 8px 6px;\n      position: relative;\n      width: 18px; }\n    .color-picker .preset-area .preset-empty-message {\n      font-style: italic;\n      margin-bottom: 8px;\n      margin-top: 4px;\n      min-height: 18px;\n      text-align: center; }\n  .color-picker .arrow {\n    height: 0;\n    width: 0;\n    border-style: solid;\n    position: absolute;\n    z-index: 999999; }\n  .color-picker .arrow-right {\n    border-width: 5px 10px;\n    border-color: rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n    top: 10px;\n    left: -20px; }\n  .color-picker .arrow-left {\n    border-width: 5px 10px;\n    border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777;\n    top: 10px;\n    left: 100%; }\n  .color-picker .arrow-bottom {\n    border-width: 10px 5px;\n    border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0);\n    top: -20px;\n    left: 10px; }\n  .color-picker .arrow-top {\n    border-width: 10px 5px;\n    border-color: #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n    left: 10px; }\n  .color-picker div.cursor-sv {\n    cursor: default;\n    position: relative;\n    -moz-border-radius: 50%;\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n    -khtml-border-radius: 50%;\n    width: 15px;\n    height: 15px;\n    border: #ddd solid 1px; }\n  .color-picker div.cursor {\n    cursor: default;\n    position: relative;\n    -moz-border-radius: 50%;\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n    -khtml-border-radius: 50%;\n    width: 16px;\n    height: 16px;\n    border: #222 solid 2px; }\n  .color-picker .saturation-lightness {\n    cursor: pointer;\n    width: 100%;\n    height: 130px;\n    border: none;\n    background-size: 100% 100%;\n    background-image: url(\"data:image/png;base64,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\"); }\n  .color-picker .box {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-flex;\n    display: -ms-flexbox;\n    display: flex; }\n    .color-picker .box .left {\n      position: relative;\n      padding: 15px 0px; }\n    .color-picker .box .right {\n      -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n      padding: 15px 0px 15px 15px; }\n  .color-picker .hue {\n    cursor: pointer;\n    width: 100%;\n    height: 15px;\n    border: none;\n    margin-bottom: 5.5px;\n    background-size: 100% 100%;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC\"); }\n  .color-picker .alpha {\n    cursor: pointer;\n    width: 100%;\n    height: 16px;\n    border: none;\n    background-size: 100% 100%;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==\"); }\n  .color-picker .selected-color {\n    width: 40px;\n    height: 26px;\n    top: 15px;\n    left: 0;\n    position: absolute;\n    border: 4px solid #000000; }\n  .color-picker .selected-color-background {\n    width: 40px;\n    height: 26px;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC\"); }\n  .color-picker .type-policy {\n    position: absolute;\n    top: 215px;\n    right: 12px;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==\");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 8px 16px;\n    -moz-background-size: 8px 16px;\n    -webkit-background-size: 8px 16px;\n    -o-background-size: 8px 16px;\n    width: 16px;\n    height: 24px;\n    display: none; }\n  .color-picker .hsla-text, .color-picker .rgba-text {\n    width: 240px;\n    font-size: 11px;\n    margin-bottom: 15px; }\n    .color-picker .hsla-text .box input, .color-picker .rgba-text .box input {\n      margin: 0;\n      float: left;\n      border: #000000 solid 1px;\n      width: 40px; }\n      .color-picker .hsla-text .box input:last-child, .color-picker .rgba-text .box input:last-child {\n        margin-right: 0; }\n    .color-picker .hsla-text .box div, .color-picker .rgba-text .box div {\n      text-align: center;\n      color: #555;\n      width: 40px;\n      margin: auto; }\n      .color-picker .hsla-text .box div:last-child, .color-picker .rgba-text .box div:last-child {\n        margin-right: 0; }\n  .color-picker .hex-text {\n    width: 240px;\n    font-size: 11px; }\n    .color-picker .hex-text .box input {\n      -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n      border: #000000 solid 1px;\n      width: 200px; }\n    .color-picker .hex-text .box div {\n      -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n      text-align: center;\n      color: #555;\n      float: left;\n      clear: left;\n      width: 40px;\n      margin: auto; }\n  .color-picker .cp-add-color-button-class {\n    background: transparent;\n    border: 0;\n    cursor: pointer;\n    display: inline;\n    margin-left: -3px;\n    margin-top: 3px;\n    padding: 0;\n    position: absolute; }\n    .color-picker .cp-add-color-button-class:hover {\n      text-decoration: underline; }\n    .color-picker .cp-add-color-button-class:disabled {\n      color: #999;\n      cursor: not-allowed; }\n      .color-picker .cp-add-color-button-class:disabled:hover {\n        text-decoration: none; }\n  .color-picker .cp-remove-color-button-class {\n    background: #fff;\n    border-radius: 50%;\n    box-shadow: 1px 1px 5px #333;\n    cursor: pointer;\n    display: block;\n    height: 10px;\n    position: absolute;\n    right: -5px;\n    text-align: center;\n    top: -5px;\n    width: 10px; }\n    .color-picker .cp-remove-color-button-class:before {\n      bottom: 3.5px;\n      content: 'x';\n      display: inline-block;\n      font-size: 10px;\n      position: relative; }\n\n.bten {\n  padding: 0;\n  cursor: pointer; }\n\n.round-btn {\n  background: #767676;\n  border: none;\n  padding: 0;\n  margin: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  cursor: pointer; }\n  .round-btn i {\n    color: #d9d9d9;\n    font-size: 14px;\n    position: relative;\n    top: 1px;\n    left: 0;\n    cursor: pointer; }\n\n.closeBtn {\n  width: 30px;\n  height: 30px;\n  border: none;\n  padding: 0;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.mlgrey-font {\n  color: #d9d9d9; }\n\n.lgrey-back {\n  background-color: #efefef; }\n\n.mdgrey-back {\n  background-color: #767676; }\n\n.header-conatiner .head-content {\n  margin: 0;\n  flex-grow: 1;\n  font-family: Roboto;\n  color: #767676;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.1;\n  letter-spacing: .1px;\n  display: inline-block; }\n\n.header-conatiner {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 13px 15px;\n  width: 270px; }\n\n.color-picker-body {\n  background-color: white;\n  padding: 15px; }\n\n.box-footer {\n  display: flex;\n  height: 50px;\n  width: 270px;\n  padding: 10px 15px; }\n\n.mlgrey-back {\n  background-color: #d9d9d9; }\n\n.wide-btn {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  font-weight: 400;\n  font-size: 14px;\n  height: 30px;\n  width: 110px;\n  border-radius: 35px;\n  cursor: pointer;\n  padding: 0px; }\n\n.white-font {\n  color: #fff; }\n\n.black-back {\n  background-color: #000; }\n\n.grey-back {\n  background-color: #767676; }\n"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<div class=\"color-picker color-picker-position\" [style.visibility]=\"hidden || !show ? 'hidden' : 'visible'\" [style.height.px]=\"cpHeight\" [style.width.px]=\"cpWidth\"\n     #dialogPopup>\n    <header class=\"header-conatiner lgrey-back\" style=\"height: 50px;\">\n        <span class=\"text-uppercase head-content\"> {{headerName}} </span>\n        <button class=\"closeBtn mdgrey-back\" type=\"button\" data-testid=\"color-picker-close\"\n            (click)=\"cancelColor($event)\">\n            <i aria-hidden=\"true\" class=\"fas fa-times white-font\"></i>\n        </button>\n    </header>\n    <div class=\"color-picker-body\">\n\n        <div [slider] [style.background-color]=\"hueSliderColor\" [rgX]=\"1\" [rgY]=\"1\" (newValue)=\"setSaturationAndBrightness($event)\"\n            (dragStart)=\"onDragStart('saturation-lightness')\" (dragEnd)=\"onDragEnd('saturation-lightness')\" class=\"saturation-lightness\">\n            <div [style.left.px]=\"slider.s\" [style.top.px]=\"slider.v\" class=\"cursor\"></div>\n        </div>\n        <div class=\"box\">\n            <div class=\"left\">\n                <div class=\"selected-color-background\"></div>\n                <div [style.background-color]=\"selectedColor\" class=\"selected-color\"></div>\n                <button *ngIf=\"cpAddColorButton\" class=\"{{cpAddColorButtonClass}}\" (click)=\"addPresetColor($event, selectedColor)\" [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\">\n                    {{cpAddColorButtonText}}\n                </button>\n            </div>\n            <div class=\"right\">\n                <div *ngIf=\"cpAlphaChannel==='disabled'\" style=\"height: 5.5px;\"></div>\n\n                <div [slider] [rgX]=\"1\" (newValue)=\"setHue($event)\" (dragStart)=\"onDragStart('hue')\" (dragEnd)=\"onDragEnd('hue')\" class=\"hue\"\n                    #hueSlider>\n                    <div [style.left.px]=\"slider.h\" class=\"cursor\"></div>\n                </div>\n\n                <div [style.display]=\"cpAlphaChannel === 'disabled' ? 'none' : 'block'\" [slider] [style.background-color]=\"alphaSliderColor\"\n                    [rgX]=\"1\" (newValue)=\"setAlpha($event)\" (dragStart)=\"onDragStart('alpha')\" (dragEnd)=\"onDragEnd('alpha')\"\n                    class=\"alpha\" #alphaSlider>\n                    <div [style.left.px]=\"slider.a\" class=\"cursor\"></div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"hsla-text\">\n            <div class=\"box\">\n                <div>H</div>\n                <input [text] type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"360\" [rg]=\"360\" (newValue)=\"setHue($event)\" [value]=\"hslaText.h\"\n                />\n                <div>S</div>\n                <input [text] type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [rg]=\"100\" (newValue)=\"setSaturation($event)\" [value]=\"hslaText.s\"\n                />\n                <div>L</div>\n                <input [text] type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [rg]=\"100\" (newValue)=\"setLightness($event)\" [value]=\"hslaText.l\"\n                />\n                <div *ngIf=\"cpAlphaChannel!=='disabled'\">A</div>\n                <input *ngIf=\"cpAlphaChannel!=='disabled'\" [text] type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\"\n                    [rg]=\"1\" (newValue)=\"setA($event)\" [value]=\"hslaText.a\" />\n            </div>\n        </div>\n\n        <div class=\"rgba-text\">\n            <div class=\"box\">\n                <div>R</div>\n                <input [text] type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [rg]=\"255\" (newValue)=\"setR($event)\" [value]=\"rgbaText.r\"\n                />\n                <div>G</div>\n                <input [text] type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [rg]=\"255\" (newValue)=\"setG($event)\" [value]=\"rgbaText.g\"\n                />\n                <div>B</div>\n                <input [text] type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [rg]=\"255\" (newValue)=\"setB($event)\" [value]=\"rgbaText.b\"\n                />\n                <div *ngIf=\"cpAlphaChannel!=='disabled'\">A</div>\n                <input *ngIf=\"cpAlphaChannel!=='disabled'\" [text] type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\"\n                    [rg]=\"1\" (newValue)=\"setA($event)\" [value]=\"rgbaText.a\" />\n            </div>\n        </div>\n\n        <div class=\"hex-text\">\n            <div class=\"box\">\n                <div>Hex</div>\n                <input [text] (blur)=\"setHex(null)\" (newValue)=\"setHex($event)\" [value]=\"hexText\" />\n            </div>\n        </div>\n\n        <!-- <div (click)=\"formatPolicy()\" class=\"type-policy\"></div> -->\n\n        <div *ngIf=\"cpPresetColors\" class=\"preset-area\">\n            <hr>\n\n            <div class=\"preset-label\">{{cpPresetLabel}}</div>\n            <div *ngIf=\"cpPresetColors.length\">\n                <div *ngFor=\"let color of cpPresetColors\" class=\"preset-color\" [style.backgroundColor]=\"color\" (click)=\"setColorFromString(color)\">\n                    <span *ngIf=\"cpAddColorButton\" class=\"{{cpRemoveColorButtonClass}}\" (click)=\"removePresetColor($event, color)\"></span>\n                </div>\n            </div>\n\n            <div *ngIf=\"!cpPresetColors.length && cpAddColorButton\" class=\"{{cpPresetEmptyMessageClass}}\">{{cpPresetEmptyMessage}}</div>\n        </div>\n\n        <!-- <div *ngIf=\"cpOKButton || cpCancelButton\" class=\"button-area\">\n        <button *ngIf=\"cpOKButton\" type=\"button\" class=\"{{cpOKButtonClass}}\" (click)=\"oKColor($event)\">{{cpOKButtonText}}</button>\n        <button *ngIf=\"cpCancelButton\" type=\"button\" class=\"{{cpCancelButtonClass}}\" (click)=\"cancelColor($event)\">{{cpCancelButtonText}}</button>\n    </div> -->\n    </div>\n    <footer class=\"box-footer lgrey-back\">\n        <div class=\"ng-star-inserted\" style=\"width: 110px;\">\n            <button class=\"btn wide-btn text-uppercase black-back white-font\" type=\"button\" data-testid=\"color-picker-save\" (click)=\"oKColor($event)\">\n            {{saveBtnTxt}} </button>\n        </div>\n        <div class=\"ng-star-inserted \" style=\"width: 110px; margin-left: 20px;\">\n            <button class=\"btn wide-btn grey-back text-uppercase mdgrey-back white-font\" type=\"button\" data-testid=\"color-picker-cancel\" (click)=\"cancelColor($event)\">\n            {{cancelBtnTxt}}</button>\n        </div>\n    </footer>\n</div>"

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(6));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(11);
var helpers_1 = __webpack_require__(4);
var color_picker_service_1 = __webpack_require__(1);
var color_picker_component_1 = __webpack_require__(2);
var color_picker_directive_1 = __webpack_require__(5);
var ColorPickerModule = (function () {
    function ColorPickerModule() {
    }
    ColorPickerModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            providers: [color_picker_service_1.ColorPickerService],
            declarations: [color_picker_component_1.ColorPickerComponent, color_picker_directive_1.ColorPickerDirective, helpers_1.TextDirective, helpers_1.SliderDirective],
            exports: [color_picker_directive_1.ColorPickerDirective],
            entryComponents: [color_picker_component_1.ColorPickerComponent]
        })
    ], ColorPickerModule);
    return ColorPickerModule;
}());
exports.ColorPickerModule = ColorPickerModule;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=ngx-color-picker.umd.js.map