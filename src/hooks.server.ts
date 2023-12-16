import { sourceLanguageTag, setLanguageTag, type AvailableLanguageTag } from '$paraglide/runtime';

export const handle = async ({ event, resolve }) => {
  // URLから言語を取得し、なければデフォルト言語を使う
  const lang = event.request.headers.get('host')?.split('.')[0] as AvailableLanguageTag ?? sourceLanguageTag;
  // 言語をセット
  setLanguageTag(lang);
  // サーバーサイドで扱うためにlocalsにセット
  event.locals.lang = lang;
  return await resolve(event, {
		transformPageChunk({ done, html }) {
      // レンダリングの最後にのみ実行する
			if (done) {
				return html.replace("%lang%", lang)
			}
		},
	})
}