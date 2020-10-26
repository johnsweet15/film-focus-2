import useSelection from 'antd/lib/table/hooks/useSelection';
import React, {useEffect, useState} from 'react';

function Error() {
  const [ status, setStatus ] = useState("")

  useEffect(() => {
    setStatus(new URLSearchParams(window.location.search).get("status"));
  }, [])

  return (
    <div>
      <h2>{`Error: ${status}`}</h2>
    </div>
  )
}

export default Error;