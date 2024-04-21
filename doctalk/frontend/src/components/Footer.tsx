import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <nav>
          <ul>
            <li className="with-icon">
              <a
                href="https://github.com/octoml/octoai-textgen-cookbook/tree/main/doctalk/frontend"
                target="_blank"
              >

              </a>
            </li>
          </ul>
          <ul>
            <li className="multilink">
              <a href="https://www.pinecone.io/" target="_blank">
              </a>
            </li>
            <li>
              <a
                href="https://octo.ai/legals/privacy-policy/?utm_source=doctalk"
                target="_blank"
              >
              </a>
            </li>
            <li>
              <a
                href="https://octo.ai/legals/terms-of-use/?utm_source=doctalk"
                target="_blank"
              >
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
