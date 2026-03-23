import React from 'react';
import { BounceLoader } from "react-spinners";

const Loading = () => {
   
    return (
        
            <div className="sweet-loading flex justify-center items-center min-h-[calc(100vh-285px)]">
      
     
             <BounceLoader/>
        </div>
    );
};

export default Loading;