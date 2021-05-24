import React from "react";
import { Helmet } from "react-helmet";

const Search = () => {
    return (
        <div>
            <Helmet>
                <script
                    async
                    src="https://cse.expertrec.com/api/js/ci_common.js?id=1f6d35dc-af10-11eb-8319-0242ac130002"
                ></script>
            </Helmet>
            <ci-search></ci-search>
        </div>
    );
};

export default Search;
