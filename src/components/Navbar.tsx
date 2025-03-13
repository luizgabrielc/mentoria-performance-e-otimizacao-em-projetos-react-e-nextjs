import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { routes } from "@/routes";
import { RouteConfig } from "@/types/routes";
import { Link } from "react-router-dom";

const Navbar = () => {
  const renderMenu = (routes: RouteConfig[]) => {
    return routes.map((route) => (
      <MenubarMenu key={route.label}>
        <MenubarTrigger>{route.label}</MenubarTrigger>
        <MenubarContent>
          {route.subRoutes ? (
            route.subRoutes.map((subRoute) =>
              subRoute.subRoutes ? (
                <MenubarSub key={subRoute.label}>
                  <MenubarSubTrigger>{subRoute.label}</MenubarSubTrigger>
                  <MenubarSubContent>
                    {subRoute.subRoutes.map((nestedRoute) => (
                      <MenubarItem key={nestedRoute.label} asChild>
                        <Link
                          to={`${route.path}${subRoute.path}${nestedRoute.path}`}
                        >
                          {nestedRoute.label}
                        </Link>
                      </MenubarItem>
                    ))}
                  </MenubarSubContent>
                </MenubarSub>
              ) : (
                <MenubarItem key={subRoute.label} asChild>
                  <Link to={`${route.path}${subRoute.path}`}>
                    {subRoute.label}
                  </Link>
                </MenubarItem>
              )
            )
          ) : (
            <MenubarItem asChild>
              <Link to={route.path}>{route.label}</Link>
            </MenubarItem>
          )}
        </MenubarContent>
      </MenubarMenu>
    ));
  };

  return <Menubar>{renderMenu(routes)}</Menubar>;
};

export default Navbar;
