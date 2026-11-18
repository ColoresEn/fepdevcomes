// components/Footer.tsx
import { connection } from "next/server";
import { Suspense } from "react";
import { siteConfig } from "@/config/site";
import { FiGithub, FiLinkedin, FiTwitter ,   FiMail} from "react-icons/fi";

async function CopyrightYear() {
  await connection();
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <footer>
      <div className="p-4 text-center bg-lime-300 ">
        <div className="m-4 flex justify-center space-x-6">
          {siteConfig.socialLinks.github && (
            <a
              href={siteConfig.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-900 hover:text-yellow-900"
            >
              <span className="sr-only">GitHub</span>
              <FiGithub className="h-6 w-6" />
            </a>
          )}
          {siteConfig.socialLinks.linkedin && (
            <a
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-900 hover:text-yellow-900"
            >
              <span className="sr-only">LinkedIn</span>
              <FiLinkedin className="h-6 w-6" />
            </a>
          )}
          {siteConfig.socialLinks.twitter && (
            <a
              href={siteConfig.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-900 hover:text-yellow-900"
            >
              <span className="sr-only">Twitter</span>
              <FiTwitter className="h-6 w-6" />
            </a>
          )}
          {siteConfig.personalInfo.email && (
            <a
              href={`mailto:${siteConfig.personalInfo.email}`}
              className="text-lime-900 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              aria-label="Email"
            >
              <span className="sr-only">Email</span>
              <FiMail className="h-6 w-6" />
            </a>
          )}
        </div>
        <div className="text-center">
          <p className="text-sm text-lime-900 m-3">
            © <Suspense fallback="----"><CopyrightYear /></Suspense> All right reserved.{" "}
          </p>
             <p className="text-sm text-lime-900">
            Made with ❤️ by {" "}{"Quica Espi Puig "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

