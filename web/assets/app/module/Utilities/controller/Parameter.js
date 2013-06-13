Ext.define("GatotKacaErp.module.Utilities.controller.Parameter",{extend:"GatotKacaErp.controller.Base",views:["GatotKacaErp.module.Utilities.view.Parameter"],fmSelector:"formparamter",store:"GatotKacaErp.module.Utilities.store.Parameter",init:function(){var b=this;var a=b.getStore(b.store);b.getStore("GatotKacaErp.store.Group").load();a.addListener("load",b.initData,b);b.loadStore(a);b.control({"formparamter button[action=save_adjustment]":{click:b.saveAdjusment},"formparamter button[action=save_break_time]":{click:b.saveBreakTime},"formparamter button[action=save_attendance_start]":{click:b.saveAttendanceStart},"formparamter button[action=save_attendance_end]":{click:b.saveAttendanceEnd},"formparamter button[action=save_prefix_value]":{click:b.savePrefixValue},"formparamter button[action=save_postfix_value]":{click:b.savePostfixValue},"formparamter button[action=save_ot_basic_formula]":{click:b.saveBasicFormula},"formparamter button[action=save_prefix_workday_formula]":{click:b.savePrefixWorkdayFormula},"formparamter button[action=save_prefix_holiday_formula]":{click:b.savePrefixHolidayFormula},"formparamter button[action=save_postfix_workday_formula]":{click:b.savePostfixWorkdayFormula},"formparamter button[action=save_postfix_holiday_formula]":{click:b.savePostfixHolidayFormula},"formparamter button[action=save_real_workday_value]":{click:b.saveRealWorkdayValue},"formparamter button[action=save_real_holiday_value]":{click:b.saveRealHolidayValue},"formparamter button[action=save_real_workday_formula]":{click:b.saveRealWorkdayFormula},"formparamter button[action=save_real_holiday_formula]":{click:b.saveRealHolidayFormula},"formparamter button[action=save_fixed_workday_formula]":{click:b.saveFixedWorkdayFormula},"formparamter button[action=save_fixed_holiday_formula]":{click:b.saveFixedHolidayFormula},"formparamter button[action=save_group_password]":{click:b.saveGroupPassword},"formparamter button[action=save]":{click:b.saveAll}});b.callParent(arguments)},initData:function(c,a,d){var b=this;b.onStoreLoad(c,a,d);Ext.each(a,function(f,e){var g=b.getForm(b.fmSelector).findField(f.data.parameter_id);if(g!==null&&g!==undefined){g.setValue(f.data.parameter_name)}})},saveAdjusment:function(b,a,e){var d=this;var c=d.getForm(d.fmSelector);var f={ATT_ADJUST_VALUE:c.findField("ATT_ADJUST_VALUE").getValue(),ATT_ROUND_VALUE:c.findField("ATT_ROUND_VALUE").getValue()};d.save(f)},saveBreakTime:function(b,a,e){var d=this;var c=d.getForm(d.fmSelector);var f={OT_BREAKTIME_VALUE:c.findField("OT_BREAKTIME_VALUE").getValue(),OT_BREAKTIME_MINUS:c.findField("OT_BREAKTIME_MINUS").getValue()};d.save(f)},saveAttendanceStart:function(b,a,e){var d=this;var c=d.getForm(d.fmSelector);var f={ATT_START_DATE:c.findField("ATT_START_DATE").getValue(),ATT_START_MONTH:c.findField("ATT_START_MONTH").getValue()};d.save(f)},saveAttendanceEnd:function(b,a,e){var d=this;var c=d.getForm(d.fmSelector);var f={ATT_END_DATE:c.findField("ATT_END_DATE").getValue(),ATT_END_MONTH:c.findField("ATT_END_MONTH").getValue()};d.save(f)},savePrefixValue:function(b,a,e){var d=this;var c=d.getForm(d.fmSelector);var f={OT_PREFIX_WORKDAY_VALUE:c.findField("OT_PREFIX_WORKDAY_VALUE").getValue(),OT_PREFIX_HOLIDAY_VALUE:c.findField("OT_PREFIX_HOLIDAY_VALUE").getValue()};d.save(f)},savePostfixValue:function(b,a,e){var d=this;var c=d.getForm(d.fmSelector);var f={OT_POSTFIX_WORKDAY_VALUE:c.findField("OT_POSTFIX_WORKDAY_VALUE").getValue(),OT_POSTFIX_HOLIDAY_VALUE:c.findField("OT_POSTFIX_HOLIDAY_VALUE").getValue()};d.save(f)},saveBasicFormula:function(b,a,e){var d=this;var c=d.getForm(d.fmSelector);var f={MINIMUM_OVERTIME_VALUE:c.findField("OT_MINUS_FORMULA").getValue(),OT_MINUS_FORMULA:c.findField("OT_MINUS_FORMULA").getValue(),OT_TOTAL:c.findField("OT_TOTAL").getValue()};d.save(f)},savePrefixWorkdayFormula:function(b,a,e){var d=this;var c=d.getForm(d.fmSelector);var f={OT_PREFIX_WORKDAY_FORMULA:c.findField("OT_PREFIX_WORKDAY_FORMULA").getValue()};d.save(f)},savePrefixHolidayFormula:function(b,a,e){var d=this;var c=d.getForm(d.fmSelector);var f={OT_PREFIX_HOLIDAY_FORMULA:c.findField("OT_PREFIX_HOLIDAY_FORMULA").getValue()};d.save(f)},savePostfixWorkdayFormula:function(b,a,e){var d=this;var c=d.getForm(d.fmSelector);var f={OT_POSTFIX_WORKDAY_FORMULA:c.findField("OT_POSTFIX_WORKDAY_FORMULA").getValue()};d.save(f)},savePostfixHolidayFormula:function(b,a,e){var d=this;var c=d.getForm(d.fmSelector);var f={OT_POSTFIX_HOLIDAY_FORMULA:c.findField("OT_POSTFIX_HOLIDAY_FORMULA").getValue()};d.save(f)},saveRealWorkdayValue:function(b,a,e){var d=this;var c=d.getForm(d.fmSelector);var f={OT_REAL_WORKDAY_VALUE:c.findField("OT_REAL_WORKDAY_VALUE").getValue()};d.save(f)},saveRealHolidayValue:function(b,a,e){var d=this;var c=d.getForm(d.fmSelector);var f={OT_REAL_HOLIDAY_VALUE:c.findField("OT_REAL_HOLIDAY_VALUE").getValue()};d.save(f)},saveRealWorkdayFormula:function(b,a,e){var d=this;var c=d.getForm(d.fmSelector);var f={OT_REAL_WORKDAY_FORMULA:c.findField("OT_REAL_WORKDAY_FORMULA").getValue()};d.save(f)},saveRealHolidayFormula:function(b,a,e){var d=this;var c=d.getForm(d.fmSelector);var f={OT_REAL_HOLIDAY_FORMULA:c.findField("OT_REAL_HOLIDAY_FORMULA").getValue()};d.save(f)},saveFixedWorkdayFormula:function(b,a,e){var d=this;var c=d.getForm(d.fmSelector);var f={OT_FIXED_WORKDAY_FORMULA:c.findField("OT_FIXED_WORKDAY_FORMULA").getValue()};d.save(f)},saveFixedHolidayFormula:function(b,a,e){var d=this;var c=d.getForm(d.fmSelector);var f={OT_FIXED_HOLIDAY_FORMULA:c.findField("OT_FIXED_HOLIDAY_FORMULA").getValue()};d.save(f)},saveGroupPassword:function(b,a,e){var d=this;var c=d.getForm(d.fmSelector);var f={DEFAULT_GROUP:c.findField("DEFAULT_GROUP").getValue(),DEFAULT_PASSWORD:c.findField("DEFAULT_PASSWORD").getValue()};d.save(f)},saveAll:function(){var a=this;var b=a.getForm(a.fmSelector).getValues();a.save(b)},save:function(b){var a=this;a.ajaxRequest(BASE_URL+"utilities/setting/save",{setting:Ext.JSON.encode(b)},function(c){a.showMessage({title:"SERVER MESSAGE",msg:c.msg,icon:Ext.MessageBox.INFO,buttons:Ext.MessageBox.OK})})}});