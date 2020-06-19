import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

const factory = (values = {}) => {
  return shallowMount(Header, {
    propsData: {
      ...values
    }
  });
};

describe("測試 Header.vue", () => {
  it("當 props loggedIn 為 true 時，顯示登出按鈕，反之則顯示登入按鈕", async () => {
    const wrapper = factory({ loggedIn: true });
    expect(wrapper.findComponent({ ref: "logOutButton" }).exists()).toBe(true);
    await wrapper.setProps({ loggedIn: false });
    expect(wrapper.findComponent({ ref: "logInButton" }).exists()).toBe(true);
  });

  it("點擊登出按鈕 emit logout 事件", () => {
    const wrapper = factory({ loggedIn: true });
    wrapper.findComponent({ ref: "logOutButton" }).trigger("click");
    expect(wrapper.emitted("logout"));
  });

  it("點擊登出按鈕 emit login 事件", () => {
    const wrapper = factory({ loggedIn: false });
    wrapper.findComponent({ ref: "logInButton" }).trigger("click");
    expect(wrapper.emitted("login"));
  });
});
