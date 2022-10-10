telephoneBook = [ 
        {name: 'Valera Vasilkov', phone: '+380956777890' },
        {name: 'Katya Yakovleva', phone: '+38067895643'},
        {name: 'Svetlana Boyko', phone: '+38044786543'},
        {name: 'Oleksandr Kirov', phone: '+380956789564'},
        {name: 'Pasha Svetlanov', phone: '+380967895673'}
       ];

    for (let key in telephoneBook) {
        const value = telephoneBook[key];
        console.log({key, value});
};
