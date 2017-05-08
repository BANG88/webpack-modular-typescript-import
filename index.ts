import { ModularImport } from 'modular-typescript-import'
const loaderUtils = require("loader-utils");
export default function (source: string) {
	const options = loaderUtils.getOptions(this);
	/*
		moduleName: 'antd',
		components: 'lib',
		style: 'css',
		camel2Dash: true,
	*/
	const mi = new ModularImport({
		style: false,
		...options
	})

	const sourceFile = mi.createSourceFile(source)
	mi.findImports(sourceFile, (newContents: string) => {
		this.callback(null, newContents)
	})
}
