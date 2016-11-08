/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './favourites-page';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '../../shared/favourites-service';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from 'ionic-angular/components/toolbar/toolbar';
import * as import13 from 'ionic-angular/components/navbar/navbar';
import * as import14 from 'ionic-angular/components/button/button';
import * as import15 from 'ionic-angular/components/menu/menu-toggle';
import * as import16 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import17 from '@angular/core/src/linker/query_list';
import * as import18 from 'ionic-angular/components/icon/icon';
import * as import19 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import20 from 'ionic-angular/components/content/content';
import * as import21 from '@angular/common/src/directives/ng_for';
import * as import22 from 'ionic-angular/config/config';
import * as import23 from '@angular/core/src/linker/element_ref';
import * as import24 from 'ionic-angular/navigation/view-controller';
import * as import25 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import26 from 'ionic-angular/components/app/app';
import * as import27 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import28 from 'ionic-angular/components/menu/menu-controller';
import * as import29 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import30 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import31 from 'ionic-angular/util/keyboard';
import * as import32 from '@angular/core/src/zone/ng_zone';
import * as import33 from 'ionic-angular/components/tabs/tabs';
import * as import34 from '@angular/core/src/linker/template_ref';
import * as import35 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import36 from 'ionic-angular/components/list/list';
import * as import37 from 'ionic-angular/components/item/item';
import * as import38 from 'ionic-angular/gestures/gesture-controller';
import * as import39 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import40 from 'ionic-angular/util/form';
var renderType_FavouritesPage_Host:import0.RenderComponentType = (null as any);
class _View_FavouritesPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _FavouritesPage_0_4:import3.FavouritesPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_FavouritesPage_Host0,renderType_FavouritesPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('favourites-page',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_FavouritesPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._FavouritesPage_0_4 = new import3.FavouritesPage(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.FavouritesService));
    this._appEl_0.initComponent(this._FavouritesPage_0_4,([] as any[]),compView_0);
    compView_0.create(this._FavouritesPage_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.FavouritesPage) && (0 === requestNodeIndex))) { return this._FavouritesPage_0_4; }
    return notFoundResult;
  }
}
function viewFactory_FavouritesPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_FavouritesPage_Host === (null as any))) { (renderType_FavouritesPage_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_FavouritesPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const FavouritesPageNgFactory:import11.ComponentFactory<import3.FavouritesPage> = new import11.ComponentFactory<import3.FavouritesPage>('favourites-page',viewFactory_FavouritesPage_Host0,import3.FavouritesPage);
const styles_FavouritesPage:any[] = ([] as any[]);
var renderType_FavouritesPage:import0.RenderComponentType = (null as any);
class _View_FavouritesPage0 extends import1.AppView<import3.FavouritesPage> {
  _el_0:any;
  _Header_0_3:import12.Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _Navbar_2_4:import13.Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _Button_4_4:import14.Button;
  _MenuToggle_4_5:import15.MenuToggle;
  _ToolbarItem_4_6:import16.ToolbarItem;
  _query_Button_4_0:import17.QueryList<any>;
  _text_5:any;
  _el_6:any;
  _Icon_6_3:import18.Icon;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _ToolbarTitle_9_4:import19.ToolbarTitle;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  /*private*/ _appEl_14:import2.AppElement;
  _Content_14_4:import20.Content;
  _text_15:any;
  _anchor_16:any;
  /*private*/ _appEl_16:import2.AppElement;
  _TemplateRef_16_5:any;
  _NgFor_16_6:import21.NgFor;
  _text_17:any;
  _text_18:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_FavouritesPage0,renderType_FavouritesPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import12.Header(this.parentInjector.get(import22.Config),new import23.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import24.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import25.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import13.Navbar(this.parentInjector.get(import26.App),this.parentInjector.get(import24.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import22.Config),new import23.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_4,'ion-button','');
    this.renderer.setElementAttribute(this._el_4,'menuToggle','');
    this._appEl_4 = new import2.AppElement(4,2,this,this._el_4);
    var compView_4:any = import27.viewFactory_Button0(this.viewUtils,this.injector(4),this._appEl_4);
    this._Button_4_4 = new import14.Button('','',this.parentInjector.get(import22.Config),new import23.ElementRef(this._el_4),this.renderer);
    this._MenuToggle_4_5 = new import15.MenuToggle(this.parentInjector.get(import28.MenuController),new import23.ElementRef(this._el_4),this.parentInjector.get(import24.ViewController,(null as any)),this._Navbar_2_4);
    this._ToolbarItem_4_6 = new import16.ToolbarItem(this.parentInjector.get(import22.Config),new import23.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import12.Toolbar,(null as any)),this._Navbar_2_4);
    this._query_Button_4_0 = new import17.QueryList<any>();
    this._appEl_4.initComponent(this._Button_4_4,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_6 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_6,'name','menu');
    this.renderer.setElementAttribute(this._el_6,'role','img');
    this._Icon_6_3 = new import18.Icon(this.parentInjector.get(import22.Config),new import23.ElementRef(this._el_6),this.renderer);
    this._text_7 = this.renderer.createText((null as any),'\n    ',(null as any));
      compView_4.create(this._Button_4_4,[([] as any[]).concat([
        this._text_5,
        this._el_6,
        this._text_7
      ]
    )],(null as any));
    this._text_8 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_9 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_9 = new import2.AppElement(9,2,this,this._el_9);
    var compView_9:any = import29.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(9),this._appEl_9);
    this._ToolbarTitle_9_4 = new import19.ToolbarTitle(this.parentInjector.get(import22.Config),new import23.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import12.Toolbar,(null as any)),this._Navbar_2_4);
    this._appEl_9.initComponent(this._ToolbarTitle_9_4,([] as any[]),compView_9);
    this._text_10 = this.renderer.createText((null as any),'Favourites',(null as any));
    compView_9.create(this._ToolbarTitle_9_4,[([] as any[]).concat([this._text_10])],(null as any));
    this._text_11 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4,[
      ([] as any[]).concat([this._el_4]),
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_3,
        this._text_8,
        this._el_9,
        this._text_11
      ]
      )
    ]
    ,(null as any));
    this._text_12 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_13 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_14 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this._appEl_14 = new import2.AppElement(14,(null as any),this,this._el_14);
    var compView_14:any = import30.viewFactory_Content0(this.viewUtils,this.injector(14),this._appEl_14);
    this._Content_14_4 = new import20.Content(this.parentInjector.get(import22.Config),new import23.ElementRef(this._el_14),this.renderer,this.parentInjector.get(import26.App),this.parentInjector.get(import31.Keyboard),this.parentInjector.get(import32.NgZone),this.parentInjector.get(import24.ViewController,(null as any)),this.parentInjector.get(import33.Tabs,(null as any)));
    this._appEl_14.initComponent(this._Content_14_4,([] as any[]),compView_14);
    this._text_15 = this.renderer.createText((null as any),'\n\n',(null as any));
    this._anchor_16 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_16 = new import2.AppElement(16,14,this,this._anchor_16);
    this._TemplateRef_16_5 = new import34.TemplateRef_(this._appEl_16,viewFactory_FavouritesPage1);
    this._NgFor_16_6 = new import21.NgFor(this._appEl_16.vcRef,this._TemplateRef_16_5,this.parentInjector.get(import35.IterableDiffers),this.ref);
    this._text_17 = this.renderer.createText((null as any),'\n\n',(null as any));
    compView_14.create(this._Content_14_4,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_15,
        this._appEl_16,
        this._text_17
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_18 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_4,'click',this.eventHandler(this._handle_click_4_0.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._anchor_16,
      this._text_17,
      this._text_18
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.Icon) && (6 === requestNodeIndex))) { return this._Icon_6_3; }
    if (((token === import14.Button) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Button_4_4; }
    if (((token === import15.MenuToggle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._MenuToggle_4_5; }
    if (((token === import16.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._ToolbarItem_4_6; }
    if (((token === import19.ToolbarTitle) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._ToolbarTitle_9_4; }
    if (((token === import13.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._Navbar_2_4; }
    if (((token === import12.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._Header_0_3; }
    if (((token === import34.TemplateRef) && (16 === requestNodeIndex))) { return this._TemplateRef_16_5; }
    if (((token === import21.NgFor) && (16 === requestNodeIndex))) { return this._NgFor_16_6; }
    if (((token === import20.Content) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._Content_14_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    const currVal_3:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._MenuToggle_4_5.menuToggle = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_5:any = 'menu';
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._Icon_6_3.name = currVal_5;
      this._expr_5 = currVal_5;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_14_4.ngOnInit(); }
    changes = (null as any);
    const currVal_8:any = this.context.favourites;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this._NgFor_16_6.ngForOf = currVal_8;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_8,currVal_8);
      this._expr_8 = currVal_8;
    }
    if ((changes !== (null as any))) { this._NgFor_16_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_16_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_4_0.dirty) {
        this._query_Button_4_0.reset([this._Button_4_4]);
        this._ToolbarItem_4_6._buttons = this._query_Button_4_0;
        this._query_Button_4_0.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Button_4_4.ngAfterContentInit(); }
    }
    const currVal_0:any = this._Navbar_2_4._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_2_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_4:any = this._MenuToggle_4_5.isHidden;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementProperty(this._el_4,'hidden',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_6:any = this._Icon_6_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_6,'hide',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._Content_14_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_14,'statusbar-padding',currVal_7);
      this._expr_7 = currVal_7;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Icon_6_3.ngOnDestroy();
    this._Content_14_4.ngOnDestroy();
  }
  private _handle_click_4_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._MenuToggle_4_5.toggle()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_FavouritesPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.FavouritesPage> {
  if ((renderType_FavouritesPage === (null as any))) { (renderType_FavouritesPage = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_FavouritesPage,{})); }
  return new _View_FavouritesPage0(viewUtils,parentInjector,declarationEl);
}
class _View_FavouritesPage1 extends import1.AppView<any> {
  _el_0:any;
  _List_0_3:import36.List;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _Item_2_4:import37.Item;
  _ItemContent_2_5:import37.ItemContent;
  _query_Label_2_0:import17.QueryList<any>;
  _query_Button_2_1:import17.QueryList<any>;
  _query_Icon_2_2:import17.QueryList<any>;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_FavouritesPage1,renderType_FavouritesPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ion-list',(null as any));
    this._List_0_3 = new import36.List(this.parent.parentInjector.get(import22.Config),new import23.ElementRef(this._el_0),this.renderer,this.parent.parentInjector.get(import38.GestureController));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','item item-block');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import39.viewFactory_Item0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Item_2_4 = new import37.Item(this.parent.parentInjector.get(import40.Form),this.parent.parentInjector.get(import22.Config),new import23.ElementRef(this._el_2),this.renderer);
    this._ItemContent_2_5 = new import37.ItemContent();
    this._query_Label_2_0 = new import17.QueryList<any>();
    this._query_Button_2_1 = new import17.QueryList<any>();
    this._query_Icon_2_2 = new import17.QueryList<any>();
    this._appEl_2.initComponent(this._Item_2_4,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'',(null as any));
    this._query_Label_2_0.reset(([] as any[]));
    this._Item_2_4.contentLabel = this._query_Label_2_0.first;
    compView_2.create(this._Item_2_4,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([this._text_3]),
      ([] as any[]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import37.Item) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._Item_2_4; }
    if (((token === import37.ItemContent) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._ItemContent_2_5; }
    if (((token === import36.List) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._List_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_2_1.dirty) {
        this._query_Button_2_1.reset(([] as any[]));
        this._Item_2_4._buttons = this._query_Button_2_1;
        this._query_Button_2_1.notifyOnChanges();
      }
      if (this._query_Icon_2_2.dirty) {
        this._query_Icon_2_2.reset(([] as any[]));
        this._Item_2_4._icons = this._query_Icon_2_2;
        this._query_Icon_2_2.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Item_2_4.ngAfterContentInit(); }
    }
    const currVal_0:any = import4.interpolate(1,'',this.context.$implicit,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_FavouritesPage1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_FavouritesPage1(viewUtils,parentInjector,declarationEl);
}