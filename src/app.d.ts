declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			lang: import("$paraglide/runtime").AvailableLanguageTag;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
