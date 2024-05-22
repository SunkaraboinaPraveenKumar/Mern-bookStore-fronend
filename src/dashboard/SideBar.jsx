import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmLeft, HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
const SideBar = () => {
    const {user}=useContext(AuthContext);
    return (
        <Sidebar aria-label="Sidebar with content separator example">
            <Sidebar.Logo href="/" img={user?.photoURL} imgAlt="user logo" className="w-16 h-12">
                <p className="text-2xl">
                    {
                        user?.displayName||"Demo User"
                    }
                </p>
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                        <p>Dashboard</p>
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
                        <p>Upload Book</p>
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
                        <p>Manage Books</p>
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        <p>Users</p>
                    </Sidebar.Item>
                    <Sidebar.Item href="/shop" icon={HiShoppingBag}>
                        <p>Products</p>
                    </Sidebar.Item>
                    <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                        <p>Sign In</p>
                    </Sidebar.Item>
                    <Sidebar.Item href="/logout" icon={HiArrowSmLeft}>
                        <p>Log Out</p>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        Upgrade to Pro
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiViewBoards}>
                        Documentation
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={BiBuoy}>
                        Help
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}

export default SideBar;