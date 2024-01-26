import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

const currentYear = new Date().getFullYear();

function isExternalLink(url: string) {
  return /^(http|https):/.test(url);
}

export function Footer() {
  const { t } = useTranslation();

  const LINKS = [
    {
      title: t('footer.products'),
      items: [
        { text: "TheShopMaster", url: "https://theshopmaster.de" },
        { text: "TheRouteMaster", url: "https://theroutemaster.de" },
      ],
    },
    {
      title: t('footer.team'),
      items: [
        { text: "GitLab", url: "https://gitlab.com/themastercollection" },
        { text: t('footer.about'), url: "/about" },
        { text: t('footer.imprint'), url: "/imprint" },
      ],
    },
    {
      title: t('footer.info'),
      items: [
        { text: t('footer.contact'), url: "/contact" },
        { text: t('footer.credits'), url: "/credits" },
      ],
    },
  ];

  return (
    <footer className="relative w-full dark:bg-gray-900 pt-10">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6 dark:text-white" placeholder={""}>
            <a href="https://themastercollection.de">TheMasterCollection</a>
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  placeholder={""}
                  variant="small"
                  className="mb-3 font-medium opacity-40 text-gray-600 dark:text-gray-300"
                >
                  {title}
                </Typography>
                {items.map(({ text, url }) => (
                  <li key={text}>
                    <Typography
                      placeholder={""}
                      as="a"
                      href={url}
                      target={isExternalLink(url) ? "_blank" : undefined}
                      rel={isExternalLink(url) ? "noopener noreferrer" : undefined}
                      className="py-1.5 font-normal transition-colors hover:text-gray-900 dark:hover:text-gray-400 text-gray-700 dark:text-gray-200"
                    >
                      {text}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between dark:border-gray-800">
          <Typography
            placeholder={""}
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 dark:text-white"
          >
            &copy; {currentYear} <a href="https://themastercollection.de">TheMasterCollection</a>.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
