const packageJson = require("./package.json") as any;


export const getAttributes = (): any => {
  return {
    name: packageJson.name,
    libraryName: packageJson.libraryName,
    version: packageJson.version,
  };
};

const App =()=>{
  return <div>Hello Plugin</div>
}

export default App;
