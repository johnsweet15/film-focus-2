/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Card, Skeleton, Modal, Space } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./movieCard.scss";

export default function movieCard(props) {
  const [showModal, setShowModal] = useState(false);
  const { movie, loading } = props;
  let poster =
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie?.poster_path;

  return (
    <div>
      <Card
        style={{ marginTop: 16 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Space align="start">
            <img
              className="movie-poster"
              src={poster}
              alt="poster"
              onClick={setShowModal}
            />
            <span className="mock-block">
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </span>
          </Space>
        </Skeleton>
      </Card>
      <Modal
        centered
        bodyStyle={{padding: 0}}
        width={"auto"}
        visible={showModal}
        footer={null}
        onOk={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
      >
        <img src={poster} alt="poster" />
      </Modal>
    </div>
  );
}
