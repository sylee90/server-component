import NavItem from "./NavItem.client";

const menu = [
  {
    id: 0,
    href: "/",
    title: 'Home',
    isActive: true
  },
  {
    id: 1,
    href: "/todos",
    title: "Todo List",
    isActive: false
  }
]

export default function NavBar() {
  return (
    <div className="container mx-auto max-w-md p-4 text-sm font-medium space-x-2">
      {
        menu.map((item) => (
          <NavItem key={item.id} item={item} />
        ))
      }
    </div>
  )
}