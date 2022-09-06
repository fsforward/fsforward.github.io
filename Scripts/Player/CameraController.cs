using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraController : MonoBehaviour
{
    [SerializeField] private GameObject player;

    private float mouseX;
    private float mouseY;
    private float mouseSensitivity = 250f;
    private float xRotation;

    private void Update() => MoveCamera();

    private void MoveCamera()
    {
        mouseX = Input.GetAxis("Mouse X") * mouseSensitivity * Time.deltaTime;
        mouseY = Input.GetAxis("Mouse Y") * mouseSensitivity * Time.deltaTime;

        xRotation -= mouseY;
        xRotation = Mathf.Clamp(xRotation, -90f, 90f);

        transform.localRotation = Quaternion.Euler(xRotation, mouseX, 0);

        player.transform.Rotate(Vector3.up * mouseX);
    }
}
