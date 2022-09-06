using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    private Rigidbody rb;

    private float movementSpeed = 5f;


    private void Start() => rb = GetComponent<Rigidbody>();

    private void Update()
    {
        MovePlayer();
    }

    private void MovePlayer()
    {
        float horizontalInput = Input.GetAxis("Horizontal") * movementSpeed * Time.deltaTime;
        float verticalInput = Input.GetAxis("Vertical") * movementSpeed * Time.deltaTime;

        transform.Translate(horizontalInput, 0, verticalInput);
    }

    public Inventory inventory;

    private void OnCollisionEnter(Collision collision)
    {
        IInventoryItem item = collision.collider.GetComponent<IInventoryItem>();
        if (item != null)
        {
            inventory.AddItem(item);
        }
    }
}
