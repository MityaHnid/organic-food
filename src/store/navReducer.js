const defaultState = {
    navItems: [
        {name: 'Home', path: '/home/vegetables', id: 1},
        {name: 'Products', path: '/products', id: 2},
        {name: 'Blog', path: '/blog', id: 3},
        {name: 'Contact', path: '/contact', id: 4},
        {name: 'Pages', path: '/pages', id: 5},
    ],
    navItemsProducts: [
        {name: 'Vegetables', path: '/home/vegetables', id: 1},
        {name: 'Fruits', path: '/home/fruits', id: 2},
        {name: 'Meat', path: '/home/meat', id: 3},
        {name: 'Dry Fruits', path: '/home/dry_fruits', id: 4},
        {name: 'Juice', path: '/home/juice', id: 5},
    ]
}
export const navReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}