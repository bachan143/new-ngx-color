"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var color_picker_service_1 = require("./color-picker.service");
var color_picker_component_1 = require("./color-picker.component");
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
    ColorPickerDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[colorPicker]',
                    host: {
                        '(click)': 'inputFocus()',
                        '(focus)': 'inputFocus()',
                        '(input)': 'inputChange($event.target.value)'
                    }
                },] },
    ];
    /** @nocollapse */
    ColorPickerDirective.ctorParameters = function () { return [
        { type: core_1.Injector, },
        { type: core_1.ComponentFactoryResolver, },
        { type: core_1.ApplicationRef, },
        { type: core_1.ViewContainerRef, },
        { type: core_1.ElementRef, },
        { type: color_picker_service_1.ColorPickerService, },
    ]; };
    ColorPickerDirective.propDecorators = {
        'colorPicker': [{ type: core_1.Input, args: ['colorPicker',] },],
        'cpToggle': [{ type: core_1.Input, args: ['cpToggle',] },],
        'cpPosition': [{ type: core_1.Input, args: ['cpPosition',] },],
        'cpPositionOffset': [{ type: core_1.Input, args: ['cpPositionOffset',] },],
        'cpPositionRelativeToArrow': [{ type: core_1.Input, args: ['cpPositionRelativeToArrow',] },],
        'cpOutputFormat': [{ type: core_1.Input, args: ['cpOutputFormat',] },],
        'cpPresetLabel': [{ type: core_1.Input, args: ['cpPresetLabel',] },],
        'cpPresetEmptyMessage': [{ type: core_1.Input, args: ['cpPresetEmptyMessage',] },],
        'cpPresetEmptyMessageClass': [{ type: core_1.Input, args: ['cpPresetEmptyMessageClass',] },],
        'cpPresetColors': [{ type: core_1.Input, args: ['cpPresetColors',] },],
        'cpMaxPresetColorsLength': [{ type: core_1.Input, args: ['cpMaxPresetColorsLength',] },],
        'cpCancelButton': [{ type: core_1.Input, args: ['cpCancelButton',] },],
        'cpCancelButtonClass': [{ type: core_1.Input, args: ['cpCancelButtonClass',] },],
        'cpCancelButtonText': [{ type: core_1.Input, args: ['cpCancelButtonText',] },],
        'cpOKButton': [{ type: core_1.Input, args: ['cpOKButton',] },],
        'cpOKButtonClass': [{ type: core_1.Input, args: ['cpOKButtonClass',] },],
        'cpOKButtonText': [{ type: core_1.Input, args: ['cpOKButtonText',] },],
        'cpAddColorButton': [{ type: core_1.Input, args: ['cpAddColorButton',] },],
        'cpAddColorButtonClass': [{ type: core_1.Input, args: ['cpAddColorButtonClass',] },],
        'cpAddColorButtonText': [{ type: core_1.Input, args: ['cpAddColorButtonText',] },],
        'cpRemoveColorButtonClass': [{ type: core_1.Input, args: ['cpRemoveColorButtonClass',] },],
        'cpFallbackColor': [{ type: core_1.Input, args: ['cpFallbackColor',] },],
        'cpHeight': [{ type: core_1.Input, args: ['cpHeight',] },],
        'cpWidth': [{ type: core_1.Input, args: ['cpWidth',] },],
        'cpIgnoredElements': [{ type: core_1.Input, args: ['cpIgnoredElements',] },],
        'cpDialogDisplay': [{ type: core_1.Input, args: ['cpDialogDisplay',] },],
        'cpSaveClickOutside': [{ type: core_1.Input, args: ['cpSaveClickOutside',] },],
        'cpAlphaChannel': [{ type: core_1.Input, args: ['cpAlphaChannel',] },],
        'cpUseRootViewContainer': [{ type: core_1.Input, args: ['cpUseRootViewContainer',] },],
        'headerName': [{ type: core_1.Input, args: ['headerName',] },],
        'saveBtnTxt': [{ type: core_1.Input, args: ['saveBtnTxt',] },],
        'cancelBtnTxt': [{ type: core_1.Input, args: ['cancelBtnTxt',] },],
        'cpInputChange': [{ type: core_1.Output, args: ['cpInputChange',] },],
        'cpToggleChange': [{ type: core_1.Output, args: ['cpToggleChange',] },],
        'cpSliderChange': [{ type: core_1.Output, args: ['cpSliderChange',] },],
        'cpSliderDragEnd': [{ type: core_1.Output, args: ['cpSliderDragEnd',] },],
        'cpSliderDragStart': [{ type: core_1.Output, args: ['cpSliderDragStart',] },],
        'colorPickerCancel': [{ type: core_1.Output, args: ['colorPickerCancel',] },],
        'colorPickerSelect': [{ type: core_1.Output, args: ['colorPickerSelect',] },],
        'colorPickerChange': [{ type: core_1.Output, args: ['colorPickerChange',] },],
        'presetColorsChange': [{ type: core_1.Output, args: ['cpPresetColorsChange',] },],
    };
    return ColorPickerDirective;
}());
exports.ColorPickerDirective = ColorPickerDirective;
//# sourceMappingURL=color-picker.directive.js.map