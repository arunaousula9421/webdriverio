import { BannerComponent } from "../components/banner.component";
import { NavBar } from "../components/navbar.component";

export class HomePage {

    public bannerComponent() : BannerComponent {
        return new BannerComponent;
    }

    public navBarComponet() : NavBar {
        return new NavBar;
    }
}