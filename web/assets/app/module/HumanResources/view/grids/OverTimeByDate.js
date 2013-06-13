Ext.define("GatotKacaErp.module.HumanResources.view.grids.OverTimeByDate",{extend:"Ext.grid.Panel",alias:"widget.gridovertimebydate",requires:["Ext.ux.CheckColumn"],store:"GatotKacaErp.module.HumanResources.store.OverTimeByDate",layout:{type:"fit"},id:"gridovertimebydate",bodyStyle:"background : transparent",title:"Today Over Time",border:true,total:0,columns:[{xtype:"rownumberer",width:"3%"},{text:"Date",dataIndex:"ot_date",xtype:"datecolumn",format:"d-m-Y",width:"9%"},{text:"First Name",dataIndex:"employee_fname",width:"19%"},{text:"Last Name",dataIndex:"employee_lname",width:"19%"},{text:"In",dataIndex:"ot_start",width:"9%"},{text:"Out",dataIndex:"ot_end",width:"9%"},{text:"Total",dataIndex:"ot_real",width:"9%"},{text:"Approved By",dataIndex:"ot_approvedby",width:"19%"}],tbar:[{fieldLabel:"From",xtype:"datefield",format:"d-m-Y",emptyText:"DD-MM-YYYY",editable:false,width:"33%",labelWidth:77,id:"otByDateFilterFrom",vtype:"daterange",endDateField:"otByDateFilterTo",name:"otByDateFilterFrom"},{fieldLabel:"To",xtype:"datefield",format:"d-m-Y",emptyText:"DD-MM-YYYY",editable:false,width:"33%",labelWidth:77,id:"otByDateFilterTo",vtype:"daterange",startDateField:"otByDateFilterFrom",name:"otByDateFilterTo"}],bbar:[{text:this.total,id:"HumanResourcesOtByDateTotal",disabled:true}]});