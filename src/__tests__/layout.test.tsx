import React from "react";
import { render } from "@testing-library/react";
import RootLayout from "@/app/layout";
import { metadata } from "../app/layout";

jest.mock("next", () => ({
  ...jest.requireActual("next")
}));

describe("RootLayout Component", () => {
  it("is defined correctly", () => {
    expect(RootLayout).toBeDefined();
    expect(typeof RootLayout).toBe("function");
  });

  it("renders children inside the body element", () => {
    const testContent = <div data-testid="test-content">Test Content</div>;

    const { getByTestId } = render(<RootLayout>{testContent}</RootLayout>);

    expect(getByTestId("test-content")).toBeInTheDocument();
    expect(getByTestId("test-content").textContent).toBe("Test Content");
  });

  it("has the expected structure", () => {
    const layout = RootLayout({ children: "Test Content" });

    expect(layout.type).toBe("html");
    expect(layout.props.lang).toBe("en");
    expect(layout.props.children.type).toBe("body");
    expect(layout.props.children.props.children).toBe("Test Content");
  });

  it("has the correct metadata", () => {
    expect(metadata.title).toBe("CV Template");
    expect(metadata.description).toBe("Using TypeScript, React, Next.js, Jest, and Node.js");
  });
});
