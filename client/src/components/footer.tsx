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
    <footer className="relative w-full dark:bg-gray-600">
      <div className="mx-auto w-full max-w-7xl px-8 mt-10">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6" placeholder={""}>
            <a href="https://themastercollection.de">TheMasterCollection</a>
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  placeholder={""}
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
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
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {text}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            placeholder={""}
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="https://themastercollection.de">TheMasterCollection</a>.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
