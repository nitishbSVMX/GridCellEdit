/**
 * This view is an example list of people.
 */

Ext.define('GridEditScroll.view.main.CellEditing', {
  extend: 'Ext.grid.plugin.CellEditing',
  __editingInProgress: false,
  __setEditable: true,

  startEdit: function(record, columnHeader) {
    let ret = false;

    if (this.__setEditable === false) {
      return ret;
    }

    if (typeof columnHeader == 'number') {
      columnHeader = this.grid.columns[columnHeader];
    }

    let id = record.id;
    let columnName = columnHeader.dataIndex;

    if (columnHeader.readOnly === false) {
      ret = this.callParent([record, columnHeader]);
      this.__editingInProgress = ret;
    }

    return ret;
  },

  setEditable: function(isEditable) {
    this.__setEditable = isEditable;
  },

  getEditable: function() {
    return this.__setEditable;
  },

  onEditComplete: function(ed, value, startValue) {
    let field = ed.field;
    this.callParent(arguments);

    if (field && field.cleanUp)
      field.cleanUp();

    this.__editingInProgress = false;
  },

  cancelEdit: function() {
    let ed = this.getActiveEditor(), field = (ed ? ed.field : null);
    this.callParent(arguments);

    if (field) {
      if (field.cleanUp)
        field.cleanUp();

      if (field.blur)
        field.blur();
    }

    this.__editingInProgress = false;
  },

  isEditingInProgress: function() {
    return this.__editingInProgress;
  },

  validateEdit: function(context) {
    let editor = context && context.column.getEditor();

    if (editor && (editor.__isLookupSlidingWindowActive || editor.__extTextAreaBtnClicked))
      return false;

    return this.callParent(arguments);
  },
});

Ext.define('GridEditScroll.view.main.TextCellEditor',
  {
    extend: 'Ext.form.Text',
    __record: null,

    constructor: function(config) {
      if (!config)
        config = {};

      this.callParent([config]);
    },

    setRecord: function(record) {
      this.__record = record;
    }
});

Ext.define('GridEditScroll.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'GridEditScroll.store.Personnel'
    ],

    title: 'Personnel',

//    store: {
//        type: 'personnel'
//    },

//    columns: [
//        { text: 'Name',  dataIndex: 'name' },
//        { text: 'Email', dataIndex: 'email', flex: 1 },
//        { text: 'Phone', dataIndex: 'phone', flex: 1 }
//    ],

//    listeners: {
//        select: 'onItemSelected'
//    },
    
    constructor: function() {
        debugger;
        var cols = [],
            col,
            uiConfig = {
              sortable: true,
              readOnly: false,
            };
        var _store = Ext.create('GridEditScroll.store.Personnel');
        var fieldLabel = ['name', 'email', 'phone', 'address', 'city', 'country', 'sex', 'age'],
            fieldColumnName = ['name', 'email', 'phone', 'address', 'city', 'country', 'sex', 'age'];
        
        var cellEditor = Ext.create('GridEditScroll.view.main.CellEditing', {
          clicksToEdit: 1 ,
        });
        
        for(var i=0; i<fieldColumnName.length; i++) {
            uiConfig.header = fieldLabel[i];
            uiConfig.columnFieldName = fieldColumnName[i];
            col = this.createTextColumnDefinition(uiConfig);
            cols.push(col);
        }
        cols[0].locked = true;
        cols[0].minWidth = 50;
        cols[0].width = 50;
        config = {
            fles: 1,
            columns: cols,
            height: 340,
            store: _store,
            plugins: [cellEditor],
            cellEditing: {
                clicksToEdit: 1
            }
        }
        this.callParent([config]);
    },
    
    createTextColumnDefinition: function(uiConfig) {
    let me = this,
        editorConfig = {
          allowBlank: true,
        };

    let editor = Ext.create(
      'GridEditScroll.view.main.TextCellEditor',
      editorConfig,
    );


    let colDef = {
      dataIndex: uiConfig.columnFieldName,
      minWidth: 130,
      width: 250,
      getEditor: function(record, defaultField) {
          return editor;
      }
    };

    colDef = Ext.apply(colDef, uiConfig);
    return colDef;
  },
});
