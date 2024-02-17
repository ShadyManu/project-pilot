import type { CodegenConfig } from "@graphql-codegen/cli";

const SCHEMA_URL = "http://localhost:8080/graphql";
const GRAPH_QUERIES = ["src/app/graphql/queries/*.graphql", "src/app/graphql/queries/**/*.graphql"];
const GRAPH_MUTATIONS = ["src/app/graphql/mutations/*.graphql", "src/app/graphql/mutations/**/*.graphql"]

const config: CodegenConfig = {
  overwrite: true,
  schema: SCHEMA_URL,
  documents: [...GRAPH_QUERIES, ...GRAPH_MUTATIONS],
  generates: {
    "src/app/graphql/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-apollo-angular"],
      config: {
        addExplicitOverride: true
      }
    }
  }
};

export default config;
