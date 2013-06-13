Ext.define("GatotKacaErp.module.HumanResources.controller.OverTimeByEmployee",{extend:"GatotKacaErp.controller.Base",views:["GatotKacaErp.module.HumanResources.view.OverTimeByEmployee"],store:"GatotKacaErp.module.HumanResources.store.OverTimeByEmployee",fmSelector:"formovertimebyemployee",startDate:"otByEmployeeFilterFrom",endDate:"otByEmployeeFilterTo",init:function(){var b=this;var a=b.getStore(b.store);a.addListener("load",b.onStoreLoad,b);b.loadStore(a);b.getStore("GatotKacaErp.store.Hour");b.getStore("GatotKacaErp.store.Minute");b.getStore("GatotKacaErp.store.Agreement");b.getStore("GatotKacaErp.module.HumanResources.store.OverTimeDetail");b.control({"gridovertimebyemployee textfield[action=search]":{keypress:b.searchEmployee},"gridovertimebyemployee button[action=refresh]":{click:b.reloadStore},gridovertimebyemployee:{select:b.gridSelect},gridovertimedetail:{select:b.viewDetail},"gridovertimedetail button[action=preview]":{click:b.preview},"gridovertimedetail button[action=pdf]":{click:b.exportPDF},"gridovertimedetail button[action=xls]":{click:b.exportXLS},"gridovertimedetail button[action=image]":{click:b.exportJPG},"gridovertimedetail datefield[name=otByEmployeeFilterFrom]":{change:b.filter},"gridovertimedetail datefield[name=otByEmployeeFilterTo]":{change:b.filter},"formovertimebyemployee button[action=save]":{click:b.save},"formovertimebyemployee button[action=reset]":{click:b.resetForm},"formovertimebyemployee button[action=new]":{click:b.newOvertime}});b.callParent(arguments)},searchEmployee:function(d,a,c){var b=this;if(a.ENTER==a.getKey()){b.loadStore(b.store,{query:d.getValue()})}},reloadStore:function(b,a,c){this.loadStore(this.store)},gridSelect:function(b,e,j,h,i,a){Ext.getCmp("gridovertimedetail").total=0;Ext.getCmp("HumanResourcesOtDetailTotal").update("");var c=this.getForm(this.fmSelector);c.reset();c.findField("employee_id").setValue(e.data.employee_id);var d=new Date();var g=new Date(d.getFullYear(),d.getMonth(),1);var f=new Date(d.getFullYear(),d.getMonth()+1,0);this.doFilter(c.findField("employee_id").getValue(),g,f)},viewDetail:function(d,c,h,a,b,g){var f=this;var e=f.getForm(f.fmSelector);f.ajaxRequest(BASE_URL+"human_resources/overtime/viewdetail",{ot_id:c.data.ot_id},function(i){var k=i.data[0].ot_start.split(":");var j=i.data[0].ot_end.split(":");var l=e.findField("ot_date");e.setValues(i.data[0]);e.findField("ot_start_h").setValue(k[0]);e.findField("ot_start_m").setValue(k[1]);e.findField("ot_end_h").setValue(j[0]);e.findField("ot_end_m").setValue(j[1]);f.setReadOnly(true)})},setReadOnly:function(b){var a=this.getForm(this.fmSelector);a.findField("ot_start_h").setReadOnly(b);a.findField("ot_start_m").setReadOnly(b);a.findField("ot_end_h").setReadOnly(b);a.findField("ot_end_m").setReadOnly(b);a.findField("ot_date").setReadOnly(b);a.findField("ot_description").setReadOnly(b);a.findField("ot_status").setReadOnly(!b)},filter:function(b,a,e){var d=this;var c=b.up("form").getForm();var f=c.findField("employee_id").getValue();var h=Ext.Date.format(Ext.getCmp(d.startDate).getValue(),"Y-m-d");var g=Ext.Date.format(Ext.getCmp(d.endDate).getValue(),"Y-m-d");if(f!=""){if(h!=""&&g!=""){d.doFilter(f,h,g)}}},preview:function(b,a,d){var c=this;c.exportValid(b.up("form").getForm(),function(g,f,e){c.ajaxRequest(BASE_URL+"human_resources/overtime/preview",{from:g,to:f,employee_id:e},function(h){c.showWindow({html:h.data},"Print Preview","70%","90%","icon-page_white_magnify")})})},exportPDF:function(b,a,c){this.exportValid(b.up("form").getForm(),function(f,e,d){window.open(BASE_URL+"human_resources/overtime/export/pdf/"+d+"/"+f+"/"+e)})},exportXLS:function(b,a,c){this.exportValid(b.up("form").getForm(),function(f,e,d){window.open(BASE_URL+"human_resources/overtime/export/excel/"+d+"/"+f+"/"+e)})},exportJPG:function(b,a,c){this.exportValid(b.up("form").getForm(),function(f,e,d){window.open(BASE_URL+"human_resources/overtime/export/jpg/"+d+"/"+f+"/"+e)})},save:function(b,a,e){var d=this;var c=d.getForm(d.fmSelector);if(c.isValid()){d.ajaxRequest(BASE_URL+"human_resources/overtime/save",{overtime:Ext.JSON.encode(c.getValues())},function(f){d.showMessage({title:"SERVER MESSAGE",msg:f.msg,icon:Ext.MessageBox.INFO,buttons:Ext.MessageBox.OK});var g=new Date();var i=new Date(g.getFullYear(),g.getMonth(),1);var h=new Date(g.getFullYear(),g.getMonth()+1,0);d.doFilter(c.findField("employee_id").getValue(),i,h);d.resetForm()})}else{d.showMessage({title:"ERROR MESSAGE",msg:"Form is not valid",icon:Ext.MessageBox.WARNING,buttons:Ext.MessageBox.OK})}},resetForm:function(c,g,a){var b=c.up("form").getForm();var h=b.findField("employee_id");var i=h.getValue();b.reset();this.setReadOnly(false);h.setValue(i);var d=new Date();var f=new Date(d.getFullYear(),d.getMonth(),1);var e=new Date(d.getFullYear(),d.getMonth()+1,0);this.doFilter(b.findField("employee_id").getValue(),f,e)},newOvertime:function(b,a,c){this.resetForm(b,a,c);b.up("form").getForm().findField("ot_status").setValue(1)},exportValid:function(d,g){var c=this;var b=d.findField("employee_id").getValue();if(b!=""){var f=Ext.Date.format(Ext.getCmp(c.startDate).getValue(),"Y-m-d");var e=Ext.Date.format(Ext.getCmp(c.endDate).getValue(),"Y-m-d");if(f==""){var a=new Date();f=new Date(a.getFullYear(),a.getMonth(),1);e=new Date(a.getFullYear(),a.getMonth()+1,0)}if(g&&typeof(g)==="function"){g(f,e,b)}}else{c.showMessage({title:"ERROR MESSAGE",msg:"Employee must be selected",icon:Ext.MessageBox.WARNING,buttons:Ext.MessageBox.OK})}},doFilter:function(a,c,b){this.loadStore("GatotKacaErp.module.HumanResources.store.OverTimeDetail",{employee_id:a,from:c,to:b})}});