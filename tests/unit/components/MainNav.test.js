import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("display company name", () => {
    // render(MainNav, {
    //   data() {
    //     return {
    //       company: "Super corp",
    //     };
    //   },
    // });
    render(MainNav);
    const companyName = screen.getByText("Bobo Careers");
    expect(companyName).toBeInTheDocument();
  });
  it("display menu list", () => {
    render(MainNav);
    const navMenu = screen.getAllByRole("listitem");
    const navigate = navMenu.map((item) => item.textContent);
    expect(navigate).toEqual([
      "Teams",
      "Locations",
      "Life at Bobo Corp",
      "How we hire",
      "Students",
      "Jobs",
    ]);
    // screen.getAllByRole("listitems");
  });
});

describe("when the user logs in", () => {
  it("displays user  profile picture", async () => {
    render(MainNav);
    let profileImage = screen.queryByRole("img", {
      name: /User profile image/i,
    });
    expect(profileImage).not.toBeInTheDocument();
    const logginButton = screen.getByRole("button", {
      name: /Sign in/i,
    });
    await userEvent.click(logginButton);
    profileImage = screen.queryByRole("img", {
      name: /User profile image/i,
    });
    expect(profileImage).toBeInTheDocument();
  });
});
