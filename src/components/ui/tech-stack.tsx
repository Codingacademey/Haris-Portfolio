"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TechItem {
  name: string;
  icon: string;
  color: string;
}

const techStack: TechItem[] = [
  { name: "Gradio", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPt6h_aAWuZDI8z_Iw0sMqlpI_DaQIhxghMw&s", color: "from-blue-500" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", color: "from-orange-500" },
  { name: "Scikit-learn", icon: "https://media.licdn.com/dms/image/v2/D4D12AQHutm-JCXIxeQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1699445795349?e=2147483647&v=beta&t=OWJk0fppswcxG_Yg8cBlwDn3YffJUqbE8FXS2AYSK2Q", color: "from-blue-400" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", color: "from-blue-600" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", color: "from-blue-700" },
  { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", color: "from-green-500" },
  { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg", color: "from-red-500" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", color: "from-orange-400" },
  { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", color: "from-yellow-500" },
  { name: "LangChain", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langgraph.png", color: "from-blue-500" },
  { name: "OpenAI", icon: "https://cdn.sologo.ai/2025/0102/20250102113948245.png", color: "from-green-400" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "from-yellow-600" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "from-orange-600" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "from-blue-500" },
  { name: "AWS", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAABsFBMVEUAAAB6iJFvfYZ1g4xygIn/hQAAAAP/gwB5hZH+fwB1hY1JSUt2hIrg5ex6g4fQfycqHAyEUDMYGBmFkZqUm6BsfYqIiYP/kQ38kxrFXzBRVFYAAAuNlJlQMR4fGRJsdXs1ODo9Pj+Fi4pcXmB/jY50SDUTERBZTzsvMDGfoY99SClWYmlvSTlzRCugmomJSCWCYE2wqI62jWGrf1eORxvOayvGonOomH6vfmJjUjstKyT3iA37nSihHQDsiiLijSdUQSvSplPtvGDEl02kgEiFajtfTSZKNCyGWjtVPyB+XCqUbTJoMw2IjXRuaE60ijtAMRxZJABMEwCqiEPjqUw2AADcnjeidy9hNCBVJhjxrkb+ry//uj7Cx802Jgunq7HUw631+f+NdFvo4dJ8NhWaa0jCua5iTURyal7LrYgfAACJfm/iwJLioWilZTy2eEHBg12kVCHvr2fXahrpj0DNwZrSs3f3w3w9PjH2wIqnmGXpk1mpkGuHg167ZTnShkGpVw0VIQAAFCCrZiTNVCP3VQowDAGLKhDSRw3dOwBwAACMVBehMxFvHQprHxvqYRWjUzSLAAAQqElEQVR4nO2bjVva2LbGgUTEmPIhoGABLSIfqRBC+BCw1M69U6n1OLbT27HTe1onpwgZEKRWT21T2nOp1Zk6x3/5rr0TENveO32qaDvP/vWpDwRM9stae61376BORyAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEhFFnNF70GM6Kv4wQjb+OHqNu/sZ3N278x39+f9N30WM5PQvF727dWrx9+8Z331/0UE7NwszSjVs63cjfln+4fdFjOS25ee8dJEYXXPn2xVizmhid9YcfL3owp8U377177yZ+9OM3LsaIxXyHxQS/dTFaZBbxwx9/DF7wYE5LcH71v+7/fO+H7O2f7v/wrYvReVcf3L5x/969nx/+90kxjr9PXdSYvhjv9IrPZ3306NGt4nznGPib3CXg8QWO64soil6vFYzMSDmnO/bPnkuYby42xoX57IzNVuzNsZiq5dLfr45c2LjOBmMuu6aJufSL41tWg6aLVJT/0VHz7WXaSebFJyV57R/AL5d+uTR+0cM5DbC+EbnVYknMZGRh/fHEufWeYDA4MvKpq51q7bgilorF6dU7d5Zmyue1Xhu+OtHh6vhZTtPgQjabjSPOScvkhNnM6DswlHniivaKURcOf5G03mgGfb4cEDyP7YHghJ3RUxoMg1SZ9GxYfbES8Xs8ZrP/gzJk/OTDiydstlOsKgRJYfBDk94zjF68oqx5GD0ItH9Qh0YcLD0xMTX1dblJpAVjoE1IBUWj8MAjB6gpx5dkD20COfaThejXtVGcknb7x2eDaRfuHhgZyYWvTIZHPl1azhCUIMHqYwPEhaZof2StVttei/mRJAb+ea4sSMXkRkydSeYrPb94Jb7mVOeXI9d7ulxsnbIDHk1JeMrucTgcHo/Hrp+aDPdZz0glEwEhNMNE5ESJ4+uNpztCgEYJR7F2abOV2qoF0KhZz3Ge+cary5oYvWfi+GTB4argoNBRP5YWnnB4OlXFBEE0T/VRjhG0FKWIEyaLIaJEp6enbTa+mXq6HYBUo1hWX91wp7aejkKaUYz9eHpUqmVl3aSN8jjPRipVSTDjY1jhuOdYign/ADl9NGeV+FJi2+x0Ov2ZJZstGo3a6m731tNtrR6MNtzu1DMBP2PNk9ov5aqVcs1v0j5wT3d41WpFEmgcLkhJX+WxHb+F0gf8fj3lNHVe6ReZu7bNhCxEhFpaVJREOmFrtlKpVDqCqgClN0uNZjNV05ugIDBqeQNCUiW77ex86ParnZMJ5UpGDRhMmcnK+mOccYF1QVZkYVvwO0GPp4/mTHmQiNpEUZSlbCgUymaldMOdSrk3BCcuaPRyoplsvoRn8MTeSZFqtaxFQI+KtrkrplKVHSY1y4arGcGP37GuSCVAFNNyxGmy97GW78zGp2emo7Nl7RIjofRLd6u5IVC43dDjYp3n39ScDAsVIRDuillD8xwqOajp5lklU5HWWDR+RzgciysCTsOYNDODLhHl6o2d7Yijj2kml+5Ep6NS6PiIb6fNgxjaxFIsYx6WRJ5r/tNvQt1UG8jzanwGDdpEra/TSI2WZ7EKiMHZ59DF4jMJAU/6zGKxGFVrS7GYyAwb+2cZcnKtVpNDJw7tNt0vBdRAGRATUopRrrHmNMEzvdo3Q1J5ehuJCMiy2oHUX8yU40pELQs5YXo6IYCN0LOOFy9eyLUEN22bthXjuY+H0AfA/IevDI+Pj18Jy80tEMPQWIxOKUWjzV3QxpgoNaFQYUaDpvzpHTx4D06/55lyZduE++jk8mwUZpoqDJeNZTkNgSmjh32zckb11MHw5ITdA41bNSiRWCZmQp0GiVkGMVwDFwS1ngUr0ozsBzfKjG4+jaGCxWITWo2XJVzjGMdlRay7X8sBXM086oKiKkvl7lX7SHiKtetpmtaaC007sUsDWwBiRiDPos0aje006oUwZYqyhzGx7GgLBsx08ixTKcvraPh28+UXjVYrtavlnH1iGDf+87CkwWHwhsjP0EiPsyMKuTUkBucZvxvBnsABAwplZkQBHA4TyDRTOxAihjVDnuUylfg2KsYUtJJXjWYLQmM34eUE8jHD4T8fyekZmfJDVEANDT7A7PcHAsgQoCOamFDCBnm27UT6UMvLZmbkCPhQxj+bbG7E8PIH8mxZik+rtQymUGgjWa8304KT6nRW/cT4cN+3mYJTHpxhtNOgj2QERZEBQfDQOE5IjC4NNqdeQ+YTrKcuJ0lx2Y86jH+WT76WwcHp0fKgKsVFwYmzLKzz1ZI8x9V3wAh1F7CwNDjT5fgneB6BQRsM8D8iKCVM4+XrjYgaGyxGQnkGR3CejTxXZkpIDKXPQD9N1dRJE/ZlpJl0AIox5UE9XhG5KKhJbwfAwjDIn6GfEJ6+TRxk0iMeAwJccyY+A70amlvLDaUZnHQnMsE0h1sNmkj6iRUFTRkkLLPJ25pPY3hejIekeBHXMgqXvND2YtQGajZ2QA5uUiYwzlAQ+uhmwpV1A43EMEwmOl0slYrcKqwBtsCbsZ00M+qUOuRZ2g9ra4b1Z6XpNLLRjH40wXP8620na4LlwbJUrsOUMVEoy3SosfCcDRYU9cbudoR1oskDcii9vW9bmj4pHnPiyDiFREZRXr1SlFqtAUsY6CvdOaN7nliK8pugD+q2J1MsgqeGOu0Z/77Oce0aix2NIhU3YjS8w4NGCzFfrpWQGqRno7YdYZzQqfTIe/fLnFXvyKOqGCp2fDT9hE+gJqmKQR1OXoLQyH7oNZR5OypCN4RHfl0WQpOEPINVdyAT52ro6PGCNCQnOBuyZDY+2d7Y3fY48d4P5eiPlop0t0ZhLQY9jr56P2WWf5LonTMgWoxGk2m8ImUz3CZ60cSa0cYrhAaKtgnEFNGsYkx6Fn3yqptcTidKRVsU5HB8q7G7xiK1pg+3ec4CuFhm5m5NDYyB6VnJy0sciIEsYzpigjXIM1gWUCzN+OtYKZrnOanEcc1dA4jRx4qNddRXT27iLCsJmIc419D6FW3OQU6evRjo2cr83RqrimHZ7uFgesmmRFQnoInRKahrpP00a6LNibQD5Ru60yKJnC0JRdtE0bHSrh998IEPJnhOUhSxZONh/YrKCqqInn6IWZa8d9NaATDYu3YDxMzGKOwJaFpLidAmx0Fo0EGzLKOFGh5SSIQMeoPNQWC2Zoauqu/I72FeAt+JxLyWKeT5PP1oncvx1dWSoImhzV01aWmUdWIpNKtlny8NYhow8WG8kccGNCK0IvOhPEvWUNcxrG1/mGWTU52On1tOP0u537TSeEuuT2LA3HcmjYGdUKMwMhHzU7SB1vyM2rKDkFBccsePbQEqsLQDa0di+MY6yjOH34Sbavf0UzGPfqIz2Zd33zSbEBmmL5FBxQZqVBTnGRJEU+zE1atXzWY9SDGPmrEWNG0m0dvn008gz7B1ZrChduBzhMQiZ2vX8H4HVDqW7WbZSEUWWNA9Mak+fwEVABoRVLP+zJn5BNplqAWcyAPQBgpbfz3YTqdZ3o05aeQBaEaP92RyCmqQaawE0YmAUrJxzaejeH2AXIFZy7JwNQ7LZrx3Y76Kgviv3WcbMVWy/f8a0KlQoqtcslFjO9MG/2BgaZZJvZRNNNMjxhhHRmzXr2YfbXBMqqeQoFAhS6PdDunMsZGMLZoQsCVDNxD0ZtYsxNANBvgw+rQ/8wpsL/9ErI3CAkY1NU5QYPDL7WbqnzEng8w07VF3y6Dbw6hlZ0cMVghOR4TDdZj7yOpQjF/LstBs1NaoYaNNmTCsto5leprAmWJM13kOKtqO4DdjKaiomYWd9zwsE0EiCpVZ81K5Eih37xpUNceTOAGHkwl1AxTEaEdDm/zmZnNDHlXv9Zj0+GYJ3kn09ME2Y+MibfDeGci1RFqOjWJicq00v5ls1fnNWmw0AAeea/sPkGd88qkAnyzgmOqcRWpAaBoCiIQwUp1a9ny3gbS/3JVHAyztNGFJEJyA39+/9ZmSWPWiRQzIUUmI07qVdLMOK5j6RlqWle5GV0is808aO4KQyWSEv3UPL6D0q9diiMjoZOdwGkp5veVOPdtIC7EIrMUB/2gsVunnPVolEV9Fu6fT08Vi0cYV42VohUqDj2K7Wypau+8MlupP6rNFURRLotSzlwdljq+L+MN4UenuIuWURD3ZQm3/2cuNjXRaURRYYihlXf9AzQasU1GTU5IkvOe8Ioo2UBOdPbEBKYEKvBaNl3vT/pVYnC3B0Wg8bu057JPETbRF02rB/3ajUa8XS/GF/mpBVkNSEglFTCiSFNIGvwBuShSVyonN1OfpmiLOAkji8T6er5YuobDGy7mT23u5rJjY2EQFE933KcaleB/3zI+vim5mzIdCz33aaIw6XyibzYZ65yosddAx4MOvJiwrcUl5oWR7wmXsnDgLnhmYnYWYL3yFX6f/uLJ2vrHwKfBLuYWV3P/0e1wngHDUbcbukzPisve9pZAH5izF8/z2w2rK5Sq0reiKp78qPovR2y6MDQwMDA4Ows8xy/l9/8HofbtXmBvIt73WP3/zn50LifEtWlygIY+BBwOuxXP7oyej8d21vfxcfiBvWXp0+s8wGLXMuVyuuQ5ITvv8/oJrYfXd/sHQnGtgcMzyfunR6S5rXN3KX7dsbR0dHPwGoJhD0M9opJ9x+ZU6/+D3g718wTU4NFCwvL+lyvkSUfA7q83Dw/0//vjj33fv/pE8/G3vIYhZPNsR/7+845r7v1/77cg15xoaGshfby+u6LSpfIqzrrxvW243jx4ODhRWzmign0VwNdncv3awNwQpDnLGChbQc1l3CjHWW21Lfmzup8OhucEBy/mVZhyBR5z78PdrB0dDD+cGh6Cg5iHx33/pB2q81S4U8miuHP7myg+OLZ739+yCj1qp3/cPINdAjtof8oXr7Zvq6HQ934g36nrv6H80ytxi+zpU5MFB1/3FfZgy+cHr5/6NQaMuyL12Q64hOa6hQU2QCwqC9/LnnuTyCmr7uFsOzbV97w73jubyY+c5/Y8J1lOHSM7e3EPXwOBgR9BYvmBZvGmF2Hz6IzYidCuLP1nmxga033Pdgxy9c7Dnyg9dv4jvcqJLWptuLOeo8HCuKwdLGhu7brG0oQ0B1mPgmXdxsW2xFFxYCH5z3qX+jdM+BGZs7lxL2UlutZGcawcHhTlo5IM9oBiNgYsrFEBWB3jmGhsb02wYflu+cP82NhLWt3t517n2mI+4fLP5Zv/wEOQcITn5gaHBwQ80naRzWFUCKfn+Vx2O852jvTnX+4vUguQsvYcufg3Cc5SH+IDPGRrUKoKWcz0qtNTCD0E6SHmgnSaY3Mv/3D69eT01qzyfPFTDs1WYA9eIEm7ogwh1ZxS8MgAJ6Lqeaj55163Wj7aO2otfxyJzZZXDxeAaFgS+DTvgIRA0dIz6GCICM2kr1eL//a7nDNbmEy3fvgJ83lWu5e4KOoIYgaKHD129QMxAx9u37hb/4B0OQ7d+B63G7renvgKMvhUv3265D7EgNIeQpK0C4jpQ2NoCHW8Pm7ztgdX3dX2d/pMEfVYvV2+7k4f7wLWT7O8fJnnbjDX4DQjpxcs1m81Wq+7GtPhkss7zNm93g+1ryaY/48Q4jb++e2e1/vrZdu2r4nM/8W8lMgQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQPhL8L+X9FRFGV2sOwAAAABJRU5ErkJggg==", color: "from-orange-600" },
  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", color: "from-blue-500" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", color: "from-blue-500" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "from-green-600" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "from-blue-500" },
  { name: "n8n", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9grVY_WlUUQbeBzZ3pcdpvT6PGeMIztKbOQ&s", color: "from-pink-500" },
  { name: "Zapier", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zapier/zapier-original.svg", color: "from-orange-600" },
  { name: "VAPI", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGQmKb9uJogNVJ8-22p2OjKm203D7OY9vwQ&s", color: "from-green-600" },
];

const TechStack = () => {
  return (
    <div className="py-20 bg-black relative overflow-hidden">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-purple-400 mb-4">
          Tech Stack & Tools
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Technologies and frameworks I work with to build intelligent solutions
        </p>
      </div>

      {/* Moving Tech Stack */}
      <div className="relative">
        {/* First row */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex space-x-12 whitespace-nowrap"
            animate={{
              x: [0, -100 * techStack.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <TechItem key={`first-${index}`} tech={tech} />
            ))}
          </motion.div>
        </div>

        {/* Second row (reverse direction) */}
        <div className="flex overflow-hidden mt-8">
          <motion.div
            className="flex space-x-12 whitespace-nowrap"
            animate={{
              x: [-100 * techStack.length, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <TechItem key={`second-${index}`} tech={tech} />
            ))}
          </motion.div>
        </div>

        {/* Third row */}
        <div className="flex overflow-hidden mt-8">
          <motion.div
            className="flex space-x-12 whitespace-nowrap"
            animate={{
              x: [0, -100 * techStack.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <TechItem key={`third-${index}`} tech={tech} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const TechItem = ({ tech }: { tech: TechItem }) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false); // Reset error state when tech item changes
  }, [tech.icon]);

  return (
    <motion.div
      className="group flex flex-col items-center justify-center cursor-pointer min-w-[120px]"
      whileHover={{
        scale: 1.1,
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Icon */}
      <div className="relative w-20 h-20 mb-3">
        {imageError ? (
          // Fallback: display first letter in a colored square
          <div className={`w-full h-full rounded-lg bg-gradient-to-br ${tech.color} to-gray-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
            {tech.name.charAt(0)}
          </div>
        ) : (
          // Attempt to load image
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-full h-full object-contain"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      
      {/* Name */}
      <span className="text-white text-sm font-medium text-center whitespace-nowrap">
        {tech.name}
      </span>
    </motion.div>
  );
};

export default TechStack;
