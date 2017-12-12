/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'GridEditScroll.Application',

    name: 'GridEditScroll',

    requires: [
        // This will automatically load all classes in the GridEditScroll namespace
        // so that application classes do not need to require each other.
        'GridEditScroll.*'
    ],

    // The name of the initial view to create.
    mainView: 'GridEditScroll.view.main.Main'
});
