import * as React from 'react'

export interface TestContextType {
    userName: string;
    setUserName: (userName: string) => void;
}

export let TestContext = React.createContext<TestContextType>(null!);

function TestProvider({ children }: { children: React.ReactNode }) {
    const [testUserName, setTestUserName] = React.useState<string | null>(null);

    let value = { testUserName, setTestUserName };

    return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
}

export default TestProvider;

