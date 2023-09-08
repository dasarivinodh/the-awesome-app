import Counter from "../Counter"
import FnCounter from "../FnCounter"
import Hello from "../Hello"
import EditProduct from "../components/EditProduct"
import GadgetStore from "../components/GadgetStore"
import ListProducts from "../components/ListProducts"
import ViewCart from "../components/ViewCart"
import Login from "../model/Login"

type Route = {
    path: string,
    component: any,
    title?: string,
    props?: any,
    isInMainMenu: boolean,
    isProtected: boolean
}

export const appRoutes: Route[] = [
    {
        path: "/",
        component: Hello,
        title: "Home",
        props: { message: "Hello Teact" },
        isInMainMenu: true,
        isProtected: false
    },
    {
        path: "/fncounter",
        component: FnCounter,
        title: "FnCounter",
        props: { initValue: 103 },
        isInMainMenu: true,
        isProtected: true
    },
    
    {
        path: "/products",
        component: ListProducts,
        title: "Products",
        isInMainMenu: true,
        isProtected: true
    },
    
    {
        path: "/products/:id",
        component: EditProduct,
        isInMainMenu: false,
        isProtected: true
    },
    {
        path: "/login/",
        title:"Login",
        component: Login,
        isInMainMenu: true,
        isProtected: true
    },
    
    {
        path: "/gadgets/",
        title:"Gadget Store",
        component: GadgetStore,
        isInMainMenu: true,
        isProtected: false
    },
    {
        path: "/viewcart/",
        title:"View Cart",
        component: ViewCart,
        isInMainMenu: true,
        isProtected: false
    }
]