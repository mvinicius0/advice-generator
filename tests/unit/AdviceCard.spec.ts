import { shallowMount } from "@vue/test-utils";
import AdviceCard from "@/components/AdviceCard.vue";

window.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ slip: { id: 1, advice: "Test advice" } }),
    headers: new Headers(),
    ok: true,
    redirected: false,
    status: 200,
    statusText: "OK",
    type: "basic",
    url: "",
    clone: jest.fn(),
    body: null,
    bodyUsed: false,
    arrayBuffer: jest.fn(),
    blob: jest.fn(),
    formData: jest.fn(),
    text: jest.fn(),
  })
) as jest.Mock;

describe("AdviceCard.vue", () => {
  it("is a vue instance", () => {
    const wrapper = shallowMount(AdviceCard);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("search advices to show", async () => {
    const wrapper = shallowMount(AdviceCard);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.advice).toBe("");
  });
});
