/**
 * This view is an example list of people.
 */
Ext.define('GridEditScroll.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'GridEditScroll.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [{ 
        text: 'Name',
        dataIndex: 'name',
        width: 100,
        cell: {
            userCls: 'bold'
        }
    }, {
        text: 'Email',
        dataIndex: 'email',
        width: 230 
    }, { 
        text: 'Phone',
        dataIndex: 'phone',
        width: 150 
    }],

    listeners: {
        select: 'onItemSelected'
    }
});
