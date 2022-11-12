import { InMemoryCache } from "@apollo/client";
import _ from 'lodash';
// import { namedConsoleLog } from "src/utils/logUtils";

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                // exploreProfiles: relayStylePagination(),
                exploreProfiles: {
                    keyArgs: [],
                    merge(existing: any, incoming: any) {
                        console.log("existing")
                        console.log(existing)
                        console.log("incoming")
                        console.log(incoming)
                        if (existing) {
                            // hack to handle cache data when user goes back to page
                            const next = JSON.parse(incoming.pageInfo.next);
                            // namedConsoleLog("next", next);
                            let pageInfo;
                            if (next?.offset <= existing.items.length) {
                                pageInfo = existing.pageInfo
                            } else {
                                pageInfo = incoming.pageInfo
                            }
                            // namedConsoleLog("pageInfo", pageInfo);
                            // end hack
                            let mergedResults =
                            {
                                ...existing,
                                items: _.uniqBy([...existing.items, ...incoming.items], "__ref"),
                                pageInfo: pageInfo,
                            }
                            console.log("mergedResults")
                            console.log(mergedResults)
                            return mergedResults
                        }
                        else {
                            return incoming
                        }
                    },
                },
                explorePublications: {
                    keyArgs: [],
                    merge(existing: any, incoming: any) {
                        console.log("existing")
                        console.log(existing)
                        console.log("incoming")
                        console.log(incoming)
                        if (existing) {
                            // hack to handle cache data when user goes back to page
                            const next = JSON.parse(incoming.pageInfo.next);
                            // namedConsoleLog("next", next);
                            let pageInfo;
                            if (next?.offset <= existing.items.length) {
                                pageInfo = existing.pageInfo
                            } else {
                                pageInfo = incoming.pageInfo
                            }
                            // namedConsoleLog("pageInfo", pageInfo);
                            // end hack
                            let mergedResults =
                            {
                                ...existing,
                                // remove eventual duplicates, just in case
                                items: _.uniqBy([...existing.items, ...incoming.items], "__ref"),
                                pageInfo: pageInfo,
                            }
                            console.log("mergedResults")
                            console.log(mergedResults)
                            return mergedResults
                        }
                        else {
                            return incoming
                        }
                    },
                },
            }
        }
    }
});