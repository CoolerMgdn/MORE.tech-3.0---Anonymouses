<?php

namespace App\Controller;

use App\Service\ActionService;
use App\Service\CommonService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DataSetController extends AbstractController
{
    /**
     * @var CommonService
     */
    private $commonService;
    /**
     * @var ActionService
     */
    private $actionService;

    public function __construct(
        CommonService $commonService,
        ActionService $actionService
    ) {
        $this->commonService = $commonService;
        $this->actionService = $actionService;
    }

    /**
     * @Route("api/v1/data", methods={"GET"})
     * @return Response
     */
    public function receiveAll(): Response
    {
        return $this->json(
            $this->commonService->getDataset()
        );
    }

    /**
     * @Route("api/v1/data/{owner}/{name}", methods={"GET"})
     * @param string $owner
     * @param string $name
     * @return Response
     */
    public function receive(string $owner, string $name): Response
    {
        return $this->json(
            $this->commonService->getDataset($owner, $name)
        );
    }

    /**
     * @Route("api/v1/data/action", methods={"POST"})
     * @param Request $request
     * @return Response
     */
    public function action(Request $request): Response
    {
        $parameters = $request->request;

        $actions = json_decode($parameters->get('actions'));
        $filters = json_decode($parameters->get('filters'));
        $datasets = json_decode($parameters->get('datasets'));

        return $this->json(
            $this->actionService->action($actions, $filters, $datasets)
        );
    }
}