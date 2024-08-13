// export interface ANFSettings {
// 	[key: string]: unknown;
// }

export interface ANFSettings {
	connectorOption: string;
	connector: string;
	multipleConnectors: string[];
	multipleConnectorsEnabled: boolean[];
	enableImage: boolean;
	imageExtensions: boolean[];
	image: string;
	enableAudio: boolean;
	audioExtensions: boolean[];
	audio: string;
	enableVideo: boolean;
	videoExtensions: boolean[];
	video: string;
	enablePdf: boolean;
	pdfExtensions: boolean[];
	pdf: string;
	customExtensions: Record<string, string[]>;
	enableCustom: boolean;
	oneInMany: string;
	enableAuto: boolean;
	enableTime: boolean;
	enablePathHash: boolean;
	enableExcludeFileName: boolean;
	excludedFolders: string[];
	subfolders: string[];
	noteNameSubfolder: boolean;
	noteNameSubfolderFront: boolean;
	exportCurrentRiboon: boolean;
	exportUnusedRiboon: boolean;
	exportCurrentDeletion: boolean;
	exportUnusedDeletion: boolean;
	copyPath: boolean;
	copyPathMode: string;
	usingLog: boolean;
	logPath: string;
}

export interface ExtensionList {
	[key: string]: string[];
}
