import { OnInit, OnChanges, EventEmitter, Injector, ApplicationRef, ElementRef, ViewContainerRef, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { ColorPickerService } from './color-picker.service';
export declare class ColorPickerDirective implements OnInit, OnChanges, OnDestroy {
    private injector;
    private cfr;
    private appRef;
    private vcRef;
    private elRef;
    private service;
    colorPicker: string;
    cpToggle: boolean;
    cpPosition: string;
    cpPositionOffset: string;
    cpPositionRelativeToArrow: boolean;
    cpOutputFormat: string;
    cpPresetLabel: string;
    cpPresetEmptyMessage: string;
    cpPresetEmptyMessageClass: string;
    cpPresetColors: Array<string>;
    cpMaxPresetColorsLength: number;
    cpCancelButton: boolean;
    cpCancelButtonClass: string;
    cpCancelButtonText: string;
    cpOKButton: boolean;
    cpOKButtonClass: string;
    cpOKButtonText: string;
    cpAddColorButton: boolean;
    cpAddColorButtonClass: string;
    cpAddColorButtonText: string;
    cpRemoveColorButtonClass: string;
    cpFallbackColor: string;
    cpHeight: string;
    cpWidth: string;
    cpIgnoredElements: any;
    cpDialogDisplay: string;
    cpSaveClickOutside: boolean;
    cpAlphaChannel: string;
    cpUseRootViewContainer: boolean;
    headerName: string;
    saveBtnTxt: string;
    cancelBtnTxt: string;
    cpInputChange: EventEmitter<any>;
    cpToggleChange: EventEmitter<boolean>;
    cpSliderChange: EventEmitter<any>;
    cpSliderDragEnd: EventEmitter<string>;
    cpSliderDragStart: EventEmitter<string>;
    colorPickerCancel: EventEmitter<string>;
    colorPickerSelect: EventEmitter<string>;
    colorPickerChange: EventEmitter<string>;
    presetColorsChange: EventEmitter<any>;
    private dialog;
    private created;
    private ignoreChanges;
    private cmpRef;
    constructor(injector: Injector, cfr: ComponentFactoryResolver, appRef: ApplicationRef, vcRef: ViewContainerRef, elRef: ElementRef, service: ColorPickerService);
    ngOnChanges(changes: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    openDialog(): void;
    toggle(value: boolean): void;
    colorChanged(value: string, ignore?: boolean): void;
    colorCanceled(): void;
    colorSelected(value: string): void;
    presetColorsChanged(value: Array<any>): void;
    inputFocus(): void;
    inputChange(value: string): void;
    inputChanged(event: any): void;
    sliderChanged(event: any): void;
    sliderDragEnd(event: any): void;
    sliderDragStart(event: any): void;
}
