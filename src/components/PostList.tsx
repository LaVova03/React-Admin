import {
  List,
  Datagrid,
  TextField,
  TextInput,
  ReferenceInput,
} from "react-admin";

const postFilters = [
  <TextInput key="search" source="q" label="Search" alwaysOn />,
  <ReferenceInput key="user" source="userId" label="User" reference="users" />,
];

export const PostList = (props: object) => (
  <List filters={postFilters} {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
    </Datagrid>
  </List>
);
