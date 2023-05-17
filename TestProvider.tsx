import React, { createContext, useState, useContext } from "react";

export interface TestContextType {
}

let TestContext = createContext<TestContextType>(null!);

function TestProvider({ children }: { children: React.ReactNode }) {
    let value = {  };

    return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
}

const useTest = (): TestContextType => {
    return useContext(TestContext);
};

export { useTest, TestProvider };
