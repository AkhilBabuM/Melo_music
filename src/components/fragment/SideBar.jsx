import React, {useContext} from "react";
import "../assets/scss/SideBar.scss";
import SideBarOptions from "./SideBarOptions";
import {ThemeContext} from "../../api/Theme";
import {ExploreOutlined, HomeOutlined, PlaylistPlay, SearchOutlined, AccountBox, HowToVoteTwoTone } from "@material-ui/icons";


function SideBar() {
    const useStyle = useContext(ThemeContext);
    return (
        <aside style={useStyle.component} className={"aside-bar"}>
            <div className="aside-bar-container library">
                <p className={"p1"}>
                    <span>LIBRARY</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={HomeOutlined} href={"/home"} title={"Home"} />
                <SideBarOptions className={"lib-sub"} Icon={SearchOutlined} href={"/home/search"}  title={"Search"}/>
                <SideBarOptions className={"lib-sub"} Icon={HowToVoteTwoTone} href={"/home/generator"}  title={"Album Art Generator"}/>
                <SideBarOptions className={"lib-sub"} Icon={HowToVoteTwoTone} href={"/home/purchase"}  title={"NFT Shop"}/>
                <SideBarOptions className={"lib-sub"} Icon={HowToVoteTwoTone} href={"/home/mint"}  title={"Create NFT"}/>
                <SideBarOptions className={"lib-sub"} Icon={HowToVoteTwoTone} href={"/home/create"}  title={"Upload Music"}/>
                
                <SideBarOptions className={"lib-sub"} Icon={ExploreOutlined} href={"/home/about"}  title={"About"}/>
                {/*<SideBarOptions className={"lib-sub"} Icon={SearchOutlined} href={"/create"} title={"Create"} />
                <SideBarOptions className={"lib-sub"} Icon={AlbumIcon} href={"/home/album"}  title={"Album"}/>
                <SideBarOptions className={"lib-sub"} Icon={EmojiPeopleIcon} href={"/home/artist"}  title={"Artist"}/>*/}
            </div>
            <div className="aside-bar-container playlist">
                <p className={"p1"}>
                    <span>PLAYLISTS</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/instrumental"}  title={"Instrumental"}/>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/electronic"}  title={"Electronic"}/>
            </div>
        </aside>
    );
}

export default SideBar;