/* eslint-disable camelcase */
const mapDBToModel = ({
  username,
  id,
  title,
  body,
  tags,
  created_at,
  updated_at,
}) => ({
  username,
  id,
  title,
  body,
  tags,
  createdAt: created_at,
  updatedAt: updated_at,
});

const mapDBToModelUsers = ({
  id,
  username,
  fullname,
}) => ({
  id,
  username,
  fullname,
});

module.exports = { mapDBToModel, mapDBToModelUsers };
