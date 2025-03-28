import { useMemo } from "react";
import { useSelector } from "react-redux";

const useLocalize = function (languageId, languageKey) {
   languageId = languageId || 0;
   const languages = useSelector((state) => state.global.languageData);

   //UseMemo kullanarak gereksiz re-render'ın önüne geçtim.
   //İçeride sadece find yapılıyor ama language verisi çok büyürse yavaşlatabilir.
   const text = useMemo(() => {
      if (languages?.length === 0) return 'Loading..';

      const lang = languages
         ?.find((s) => s.LanguageId == languageId)
         ?.LanguageWords?.find((s2) => s2.LanguageKey == languageKey);

      return lang?.LanguageValue || languageKey;
   },[languages,languageId,languageKey])

   return text;
};
export default useLocalize;