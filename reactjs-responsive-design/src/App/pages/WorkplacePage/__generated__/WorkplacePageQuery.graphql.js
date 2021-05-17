/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type WorkplacePageQueryVariables = {||};
export type WorkplacePageQueryResponse = {|
  +tasks: ?$ReadOnlyArray<?{|
    +_id: number,
    +name: string,
  |}>
|};
export type WorkplacePageQuery = {|
  variables: WorkplacePageQueryVariables,
  response: WorkplacePageQueryResponse,
|};
*/


/*
query WorkplacePageQuery {
  tasks {
    _id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Task",
    "kind": "LinkedField",
    "name": "tasks",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "WorkplacePageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "WorkplacePageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a432a95fbd0cd6bee0cb98bee1d1cafa",
    "id": null,
    "metadata": {},
    "name": "WorkplacePageQuery",
    "operationKind": "query",
    "text": "query WorkplacePageQuery {\n  tasks {\n    _id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'eaaaff131b15c3afaff23b15f22e1304';

module.exports = node;
