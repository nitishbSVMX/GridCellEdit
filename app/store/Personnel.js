Ext.define('GridEditScroll.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'GridEditScroll.model.Personnel',

    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" , address:"BTM", city: "Bangalore", country:"India", sex:"Male", age:"34"},
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" , address:"Park Streat", city: "Kolkata", country:"India", sex:"Female", age:"24"},
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" , address:"Worli", city: "Mumbai", country:"India", sex:"Male", age:"31"},
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" , address:"Yeswantpur", city: "Bangalore", country:"India", sex:"Female", age:"30"},
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" , address:"Beckbagan", city: "Kolkata", country:"India", sex:"Male", age:"34"},
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" , address:"Swindon", city: "Wiltshire", country:"UK", sex:"Female", age:"24"},
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" , address:"Hebbal", city: "Bangalore", country:"India", sex:"Male", age:"31"},
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" , address:"Yeswantpur", city: "Bangalore", country:"India", sex:"Female", age:"30"},
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" , address:"BTM", city: "Bangalore", country:"India", sex:"Male", age:"34"},
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" , address:"Hennur", city: "Bangalore", country:"India", sex:"Female", age:"24"},
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" , address:"Hebbal", city: "Bangalore", country:"India", sex:"Male", age:"31"},
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" , address:"Yeswantpur", city: "Bangalore", country:"India", sex:"Female", age:"30"},
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" , address:"BTM", city: "Bangalore", country:"India", sex:"Male", age:"34"},
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" , address:"Hennur", city: "Bangalore", country:"India", sex:"Female", age:"24"},
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" , address:"Hebbal", city: "Bangalore", country:"India", sex:"Male", age:"31"},
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" , address:"Yeswantpur", city: "Bangalore", country:"India", sex:"Female", age:"30"},
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" , address:"BTM", city: "Bangalore", country:"India", sex:"Male", age:"34"},
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" , address:"Hennur", city: "Bangalore", country:"India", sex:"Female", age:"24"},
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" , address:"Hebbal", city: "Bangalore", country:"India", sex:"Male", age:"31"},
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" , address:"Yeswantpur", city: "Bangalore", country:"India", sex:"Female", age:"30"}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
